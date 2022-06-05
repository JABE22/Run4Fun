from django.contrib import messages
from django.shortcuts import render, redirect
from events.models import Event, Competitor, Race, Result, Contact
from events.models import EventOrganizerClub, EventOrganizerPerson, EventInfo, EventNotification
from django.core import serializers
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
import json

def home(req):
    context = {'home':'active'}
    return render(req, "home.html", context)

def upcome(req):
    events = Event.objects.all()
    events_json = serializers.serialize('json', events)
    #events = Event.objects.values()
    #events_json = JsonResponse(list(events), safe=False).content
    context = {'upcome':'active','data':events_json}
    return render(req, "upcome.html", context)

def past(req):
    context = {'past':'active'}
    return render(req, "past.html", context)

def search(req):
    context = {'search':'active'}
    return render(req, "search.html", context)

def about(req):
    context = {'about':'active'}
    return render(req, "about.html", context)

def contact(req):
    context = {'contact':'active'}
    if req.method == 'POST':
        full_name = req.POST.get('full_name')
        email = req.POST.get('email')
        subject = req.POST.get('subject')
        message = req.POST.get('message')
        print(full_name, email, subject, message)
        Contact.objects.create(full_name=full_name, email=email, 
                               subject=subject, message=message)
        messages.success(req, 'Data has been submitted!')

        return redirect('/contact')

    return render(req, "contact.html", context)

def map(req):
    context = {'map':'active'}
    return render(req, "map.html", context)

@login_required(login_url='/accounts/login/')
def enote(req):
    context = {'enote':'active'}

    if req.method == 'POST':
        # Event organizer form fields
        org_name = req.POST.get('org_name')
        org_address = req.POST.get('org_address')
        org_city = req.POST.get('org_city')
        org_state = req.POST.get('org_state')
        org_postcode = req.POST.get('org_postcode')
        org_country = req.POST.get('org_country')
        print(org_name, org_address, org_city, org_state, org_postcode, org_country)
        # Event information form fields
        event_name = req.POST.get('event_name')
        event_date = req.POST.get('event_date')
        event_time = req.POST.get('event_time')
        event_dist = req.POST.get('event_dist')
        print(event_name, event_date, event_time, event_dist)
        # Event person in charge form fields
        firstname = req.POST.get('firstname')
        lastname = req.POST.get('lastname')
        email = req.POST.get('email')
        phone = req.POST.get('phone')
        print(firstname, lastname, email, phone)
        # Additional information form field
        add_info = req.POST.get('add_info')
        print(add_info)

        EventOrganizerClub.objects.create(name=org_name, address=org_address, city=org_city, 
                                          state=org_state, post_code=org_postcode, country=org_country)
        EventOrganizerPerson.objects.create(email=email, 
                                            event_organizer=EventOrganizerClub.objects.get(name=org_name), 
                                            first_name=firstname, 
                                            last_name=lastname, 
                                            phone=phone)
        EventInfo.objects.create(event_name=event_name, 
                                 event_organizer=EventOrganizerClub.objects.get(name=org_name), 
                                 date=event_date, 
                                 start_time=event_time, 
                                 distance=event_dist)
        EventNotification.objects.create(event_organizer=EventOrganizerClub.objects.get(name=org_name),
                                         event_info=EventInfo.objects.get(event_name=event_name),
                                         person=EventOrganizerPerson.objects.get(email=email),
                                         additional_info=add_info)

        messages.success(req, 'Data has been submitted!')

        return redirect('/enote')

    return render(req, "enote.html", context)


# Data import views
def events(req):
    events = Event.objects.all()
    events_json = serializers.serialize('json', events)
    return HttpResponse(events_json, content_type="text/json-comment-filtered")

def races(req):
    races = Race.objects.all()
    races_json = serializers.serialize('json', races)
    return HttpResponse(races_json, content_type="text/json-comment-filtered")

def results(req):
    results = Result.objects.all()
    results_json = serializers.serialize('json', results)
    return HttpResponse(results_json, content_type="text/json-comment-filtered")