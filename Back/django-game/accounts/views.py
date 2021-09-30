from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
# from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import serializers, status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import User
from .serializer import UserSerializer
from games.models import Hangman, AcidRain, CardMatching
from games.serializer import HangmanSerializer, AcidRainSerializer, CardMatchingSerializer
from learn.models import Word
from learn.serializer import WordSerializer

from hangul_utils import split_syllables, join_jamos



# Create your views here.
@api_view(['POST'])
def signup(request):
    # 비밀번호와 비밀번호 확인을 client 요청 데이터에서 꺼내기
    password = request.data.get('password')
    password_confirm = request.data.get('passwordConfirm')
    # is_id_check = request.data.get('idCheck')

    # id 중복을 확인하지 않았다 -> 확인하라고 돌려보냄
    # if not is_id_check:
    #     return Response({'error': 'ID 중복 확인이 되지 않았습니다. 확인해주세요.'}, status=status.HTTP_400_BAD_REQUEST)

    # 비밀번호와 비밀번호 확인, 다르다 -> 잘못 입력
    if password != password_confirm:
        return Response({'error': '비밀번호가 일치하지 않습니다. 다시 입력해 주세요.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # 직렬화 작업(외부 데이터를 가져왔을 땐 딕셔너리 화를 통해 적절히 처리해줌)
    serializer = UserSerializer(data=request.data)

	# 유효성 검사 진행 -> password도 같이 직렬화 진행
    if serializer.is_valid(raise_exception=True):
        user = serializer.save()
        # 비밀번호 해싱 - 암호화(이것을 사용하지 않으면 관리자 페이지에서 알 수 없는 알고리즘이라고 뜸 
        # - 장고의 암호화 알고리즘에 맞게 패스워드를 변환) 
        user.set_password(request.data.get('password'))
        user.save()
    # password는 write_only 이므로 직렬화 과정에는 포함 되지만 표현(response)할 때는 나타나지 않는다. 
    return Response(serializer.data, status=status.HTTP_201_CREATED)