from django.urls import path, include
from . import views
from rest_framework_jwt.views import obtain_jwt_token, verify_jwt_token

app_name = 'accounts'

urlpatterns = [
    path('signup', views.signup, name='signup'),
    # 토큰 부여를 위한 url
    path('api-token-auth', obtain_jwt_token),
    # 해당 토큰이 유효한지 체크하는 url
    path('api-token-verify', verify_jwt_token),
]
