from django import template
from django.urls import reverse

# This will set navigation item active in navigation bar
register = template.Library()
@register.simple_tag
def navactive(request, urls):
    if request.path in ( reverse(url) for url in urls.split() ):
        return "active"
    return ""