from django.urls import path, include
from . import views
# from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token
from .views import MyTokenObtainPairView

app_name = 'accounts'

urlpatterns = [
    # 유저 회원가입
    path('signup/', views.signup, name='signup'),
    # 유저 상세 정보
    path('<int:user_pk>/', views.user_detail, name='user_detail'),
    # simple_jwt를 이용한 토큰 부여 1
    path('signin/', views.signin.as_view(), name='signin'),
    # simple_jwt를 이용한 토큰 부여 2
    # path('getToken/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    # 팔로잉 팔로우
    path('follow/<int:user_pk>/', views.follow, name='follow'),
    # 구버전 jwt
    # 토큰 부여를 위한 url
    # path('api-token-auth/', obtain_jwt_token),
    # 해당 토큰이 유효한지 체크하는 url
    # path('api-token-verify/', verify_jwt_token),
]
