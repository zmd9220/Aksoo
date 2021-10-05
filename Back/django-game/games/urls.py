from django.urls import path
from . import views

app_name = 'games'

urlpatterns = [
    path('hangman/<int:select>/', views.hangman, name='hangman'),
    path('setScore/<int:select_game>/', views.set_score, name='set_score'),
    path('ranking/<int:select_game>/', views.ranking, name='ranking'),
]
