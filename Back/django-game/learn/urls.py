from django.urls import path
from . import views

app_name = 'learn'

urlpatterns = [
    # 학습하기 단어 제공(자음, 모음, 단어)
    path('getWords/<str:select>/', views.get_words, name='get_words'),
    # 즐겨찾기 (구현 X)
    path('bookmark/', views.bookmark, name='bookmark'),
]
