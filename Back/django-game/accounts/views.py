from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
# from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import serializers, status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication

# from .models import User, TierCode
from .models import TierCode
from .serializer import UserSerializer
from games.models import Hangman, AcidRain, CardMatching
from games.serializer import HangmanSerializer, AcidRainSerializer, CardMatchingSerializer
from learn.models import Word
from learn.serializer import WordSerializer

# from rest_framework_jwt

from hangul_utils import split_syllables, join_jamos


@api_view(['POST'])
def signup(request):
    # 비밀번호와 비밀번호 확인을 client 요청 데이터에서 꺼내기
    password = request.data.get('password')
    password_confirmation = request.data.get('passwordConfirmation')
    # is_id_check = request.data.get('idCheck')

    # id 중복을 확인하지 않았다 -> 확인하라고 돌려보냄
    # if not is_id_check:
    #     return Response({'error': 'ID 중복 확인이 되지 않았습니다. 확인해주세요.'}, status=status.HTTP_400_BAD_REQUEST)

    # 비밀번호와 비밀번호 확인, 다르다 -> 잘못 입력
    if password != password_confirmation:
        return Response({'error': '비밀번호가 일치하지 않습니다. 다시 입력해 주세요.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # 직렬화 작업(외부 데이터를 가져왔을 땐 딕셔너리 화를 통해 적절히 처리해줌)
    serializer = UserSerializer(data=request.data)

	# 유효성 검사 진행 -> password도 같이 직렬화 진행
    if serializer.is_valid(raise_exception=True):
        tier = get_object_or_404(TierCode, id=5)
        user = serializer.save(tier=tier)
        # 비밀번호 해싱 - 암호화(이것을 사용하지 않으면 관리자 페이지에서 알 수 없는 알고리즘이라고 뜸 
        # - 장고의 암호화 알고리즘에 맞게 패스워드를 변환) 
        # user.set_password(request.data.get('password'))
        # user.save(tier)
    # password는 write_only 이므로 직렬화 과정에는 포함 되지만 표현(response)할 때는 나타나지 않는다. 
    return Response(serializer.data, status=status.HTTP_201_CREATED)

# JWT 토큰 발급시 제공할 데이터 목록 (payload) 관리
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data,
        # 'userId': user.pk
    }