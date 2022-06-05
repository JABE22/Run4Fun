from django.db import models
import string
import random

from numpy import maximum
from .ccodes import CODES, CODES2

# Formats country codes
CODES = tuple(zip(CODES.keys(),CODES.values()))
CODES2 = tuple(zip(CODES2.keys(),CODES2.values()))

# ID generator
def unique_id(size):
    chars = list(set(string.ascii_uppercase + string.digits).difference('LIO01'))
    return ''.join(random.choices(chars, k=size))

# Models
class EventSource(models.Model):
    name = models.CharField(max_length=50, primary_key=True)
    url = models.URLField()
    event_location_type = models.CharField(
        max_length=3,
        choices=(('cnt', 'Continent'),('cry', 'Country'),('cty', 'City')),
        blank=True,
        default='cry',
        help_text='Select area type',
    )

class Competitor(models.Model):
    # Primary key is compination of two fields.
    ccode = models.CharField(max_length=6, 
                             primary_key=True, 
                             default=unique_id(6),
                             help_text="max 6 chars")
    last_name = models.CharField(max_length=50)
    first_name = models.CharField(max_length=25)
    email = models.EmailField(null=True) # Validates email using EmailValidator
    phone = models.CharField(null=True, max_length=20, unique=True) # Validates email using EmailValidator
    COUNTRIES = (('FIN', 'Finland'), ('SWE', 'Sweden'),('RUS', 'Russia'),('GER', 'Germany'))
    country = models.CharField(
        max_length=3,
        choices=COUNTRIES,
        blank=True,
        default='FIN',
        help_text='Select citizenship',
    )

    class Meta:
        ordering = ['last_name', 'first_name']

    def __str__(self):
        return self.first_name + " " + self.last_name

class Event(models.Model):
    date = models.DateField(null=True)
    ename = models.CharField(max_length=100)
    ecode = models.CharField(max_length=6, primary_key=True, default=unique_id(6))
    city = models.CharField(max_length=50)
    url = models.URLField()
    description = models.TextField(max_length=2000, null=True, default='Half Marathon Event (21km)')
    COUNTRIES = (('FIN', 'Finland'), ('SWE', 'Sweden'),('RUS', 'Russia'),('GER', 'Germany'))
    country = models.CharField(
        max_length=50,
        choices=COUNTRIES,
        blank=True,
        default='FIN',
        help_text='Select code'
    )
    CODES = (('fin', 'FIN'),('swe', 'SWE'),('rus', 'RUS'),('ger', 'GER'))
    ccode = models.CharField(
        max_length=3,
        choices=CODES,
        blank=True,
        default='FIN',
        help_text='Select code'
    )

    class Meta:
        ordering = ['country','city']

    def __str__(self):
        return  f'{self.ename} ({self.country}, {self.city})'


class Race(models.Model):
    # --> Constructing choices for event name (ename) field
    enames = Event.objects.values_list('ename', flat=True)
    ecodes = Event.objects.values_list('ecode', flat=True)
    #print(tuple(zip(ecodes, enames)))
    e_choices = tuple(zip(enames, ecodes))
    # <--
    race_code = models.CharField(max_length=10, primary_key=True, help_text="Brief and descriptive (max 10 chars)")
    event = models.ForeignKey(Event, on_delete=models.CASCADE, help_text="Select existing event")
    # Following "ename" is redundant with Event model, but helps javascript part to work with data
    ecode = models.CharField(max_length=100, choices=e_choices, null=True,help_text="This is how your event name is presented on the site")
    ccode = models.CharField(max_length=3, choices=CODES2, null=True, help_text="This helps to set flags on the result page")
    distance = models.SmallIntegerField(default=21, null=False)
    start = models.DateTimeField(null=True)

    def __str__(self):
        return f'{self.race_code}'


class Result(models.Model):
    race_code = models.ForeignKey(Race, on_delete=models.CASCADE)
    place = models.SmallIntegerField(default=0)
    comp_number = models.SmallIntegerField(default=123)
    competitor = models.CharField(max_length=50)
    ccode = models.CharField(max_length=3, choices=CODES2)
    comp_category = models.CharField(max_length=10,default='mgen',help_text='Select category')
    finish_time = models.CharField(max_length=8, null=True, help_text="HH:MM:SS")
    # Alternative for manual writing (using charfield) 
    # => csv file import requires it. 
    # There is no unique format for category
    '''
    CATS = (('mgen', 'M-General'),('opt1', 'M40'),('opt2', 'M50'),('opt3', 'M60'),
            ('wgen', 'W-General'),('opt1', 'W40'),('opt2', 'W50'),('opt3', 'W60'))
    comp_category = models.CharField(
        max_length=10,
        choices=CATS,
        blank=True,
        default='mgen',
        help_text='Select category'
    )
    '''
    
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['race_code', 'competitor'], 
                name='event-competitor_comb-key'
            )
        ]
    
    def __str__(self):
        return str(self.race_code) + " " + str(self.competitor)

# This model is used to store information sent by client contact form
class Contact(models.Model):
    # Subjects are disabled for a practical reasons (useless)
    '''
    SUBJECTS = (('opt0', 'New sport event'),
                ('opt1', 'Results service application'),
                ('opt2', 'Request for a membership of Run4Fun team'),
                ('opt3', 'Incorrect information notification'),
                ('opt4', 'Service feedback and development ideas'),
                ('opt5', 'Other service request'),
                ('opt6', 'Other'))
    '''
    full_name = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    subject = models.CharField(max_length=100)
    message = models.TextField(max_length=2000)

    def __str__(self):
        return self.full_name

# Following 4 models are used to store form data sent by event organizer via event notification form
class EventOrganizerClub(models.Model):
    # Organization fields in the form of event notification
    name = models.CharField(max_length=100, primary_key=True)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    post_code = models.CharField(max_length=10)
    country = models.CharField(max_length=80)

    def __str__(self):
        return self.name

class EventOrganizerPerson(models.Model):
    # Person in charge fields in the form of event notification
    email = models.CharField(max_length=50, primary_key=True)
    event_organizer = models.ForeignKey(EventOrganizerClub, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)

    def __str__(self):
        return self.email

class EventInfo(models.Model):
    # Event information fields in the form of event notification
    event_name = models.CharField(max_length=50, primary_key=True)
    event_organizer = models.ForeignKey(EventOrganizerClub, on_delete=models.CASCADE)
    date = models.DateField()
    start_time = models.TimeField()
    distance = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.event_name

class EventNotification(models.Model):
    event_organizer = models.ForeignKey(EventOrganizerClub, on_delete=models.CASCADE)
    event_info = models.ForeignKey(EventInfo, on_delete=models.CASCADE)
    person = models.ForeignKey(EventOrganizerPerson, on_delete=models.CASCADE)
    additional_info = models.TextField(max_length=1000, null=True)

    def __str__(self):
        return f'{self.event_organizer}, {self.event_info}, {self.person}'

