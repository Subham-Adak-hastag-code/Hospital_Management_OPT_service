from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('',views.webpage1,name='webpage1'),
    path('login',views.login,name="login")
]
