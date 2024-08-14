from django.urls import path
from . import views

urlpatterns = [
    path("api/newsletter/register", views.newsletter_register , name="newsletter-register"),
    path("api/newsletter/list", views.newsletter_register_list, name="newsletter-list")
]