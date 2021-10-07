from django.urls import path
from . import views

app_name = 'games'

urlpatterns = [
    # 행맨 게임 단어 데이터 제공
    path('hangman/<int:select>/', views.hangman, name='hangman'),
    # 점수 갱신
    path('setScore/<int:select_game>/', views.set_score, name='set_score'),
    # 점수 확인
    path('getScore/<int:select_game>/', views.get_score, name='get_score'),
    # 전체 게임별 랭킹 정보(명예의 전당)
    path('ranking/<int:select_game>/', views.ranking, name='ranking'),
    # user_detail에 해당 정보를 포함하여 사용 X
    # path('myRanking/', views.my_ranking, name='my_ranking'),
]
