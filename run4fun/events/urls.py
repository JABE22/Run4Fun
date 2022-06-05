from django.urls import path
from events import views


urlpatterns = [
    path('', views.home, name="home"),
    path('home/', views.home, name="home"),
    path('upcome/', views.upcome, name="upcome"),
    path('past/', views.past, name="past"),
    path('search/', views.search, name="search"),
    path('about/', views.about, name="about"),
    path('contact/', views.contact, name="contact"),
    path('map/', views.map, name="map"),
    path('enote/', views.enote, name="enote"),
    # Data paths
    path('events/', views.events, name="events"),
    path('results/', views.results, name="results"),
    path('races/', views.races, name="races")
]