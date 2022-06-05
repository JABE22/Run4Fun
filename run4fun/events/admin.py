from django.contrib import admin
from django.urls import path
from django.shortcuts import render
from django import forms
from .models import Event, Race, Competitor, Result, EventSource, Contact
from .models import EventInfo, EventNotification, EventOrganizerClub, EventOrganizerPerson


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('date','ename','ecode','country','ccode','city','url','description')
    fields  = ['date','ename','ecode','country','ccode','city','url','description']

@admin.register(Race)
class RaceAdmin(admin.ModelAdmin):
    list_display = ('event','ecode','race_code','ccode','distance','start')
    fields = ['event','ecode','race_code','ccode','distance','start']

@admin.register(Competitor)
class CompetitorAdmin(admin.ModelAdmin):
    list_display = ('ccode','last_name','first_name','country','email','phone')
    fields = ['ccode','last_name','first_name','country','email','phone']

@admin.register(EventSource)
class EventSourceAdmin(admin.ModelAdmin):
    list_display = ('name','event_location_type','url')
    fields = ['name','event_location_type','url']

@admin.register(Result)
class ResultAdmin(admin.ModelAdmin):
    list_display = ('race_code','place','comp_number','competitor','ccode','comp_category','finish_time')
    fields = ['race_code','place','comp_number','competitor','ccode','comp_category','finish_time']

    def get_urls(self):
        urls = super().get_urls()
        new_urls = [path('upload-csv/', self.upload_csv),]
        return new_urls + urls

    def upload_csv(self, request):

        if request.method == "POST":
            print('Action is POST')
            csv_file = request.FILES["csv_upload"]
            rcode = request.POST.get('race_code')
            file_data = csv_file.read().decode("utf-8")
            csv_data = file_data.split("\n")[1:]

            for x in csv_data:
                fields = x.split(",")
                # 0-Rank, 1-Race No, 2-Name, 3-Nation, 4-CountryCode, 5-Club, 6-Category, 7-Time, 8-Behind
                try:
                    created = Result.objects.update_or_create(
                        race_code = Race.objects.get(race_code=rcode),
                        place = fields[0],
                        comp_number = fields[1],
                        competitor = fields[2],
                        ccode = fields[4],
                        comp_category = fields[6],
                        finish_time = fields[7],
                    )
                except:
                    print("Possible value error")

        form = CsvImportForm()
        data = {"form": form}
        return render(request, "admin/csv_upload.html", data)

    
class CsvImportForm(forms.Form):
    # --> Constructing choices for event name (ename) field
    rcodes = Race.objects.values_list('race_code', flat=True)
    r_choices = tuple(zip(rcodes, rcodes))
    # <--
    race_code = forms.ChoiceField(choices=r_choices, label="Select existing race code")
    csv_upload = forms.FileField()
    #place = forms.ModelChoiceField(queryset=Result.objects.all())

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['full_name','email','subject','message']
    fields = ['full_name','email','subject','message']

@admin.register(EventOrganizerClub)
class EventOrganizerClubAdmin(admin.ModelAdmin):
    list_display = ['name','address','city','state','post_code','country']
    fields = ['name','address','city','state','post_code','country']

@admin.register(EventOrganizerPerson)
class EventOrganizerPersonAdmin(admin.ModelAdmin):
    list_display = ['email','event_organizer','first_name','last_name','phone']
    fields = ['email','event_organizer','first_name','last_name','phone']

@admin.register(EventInfo)
class EventInfoAdmin(admin.ModelAdmin):
    list_display = ['event_name','event_organizer','date','start_time','distance']
    fields = ['event_name','event_organizer','date','start_time','distance']

@admin.register(EventNotification)
class EventNotificationAdmin(admin.ModelAdmin):
    list_display = ['event_organizer','event_info','person','additional_info']
    fields = ['event_organizer','event_info','person','additional_info']

