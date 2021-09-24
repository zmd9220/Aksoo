from django.urls import path
from . import views

app_name = 'learn'

urlpatterns = [
    path('getWords/<str:select>', views.get_words, name='get_words'),
]
