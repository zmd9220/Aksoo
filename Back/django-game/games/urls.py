from django.urls import path
from . import views

app_name = 'games'

urlpatterns = [
    path('hangman/<int:select>', views.hangman, name='hangman'),
    path('setScore/<int:select>', views.set_score, name='set_score'),
]
