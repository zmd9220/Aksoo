from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import serializers, status
from .models import User, Word, Hangman, AcidRain, CardMatching
from .serializer import WordSerializer, HangmanSerializer, AcidRainSerializer, CardMatchingSerializer
from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from hangul_utils import split_syllables, join_jamos

# Create your views here.
@api_view(['GET'])
def hangman(request, select):
    # 해당 장르에 맞는 단어 리스트 가져오기
    response_word = get_list_or_404(Word, theme_id=select)
    for word in response_word:
        # 각 단어별로 자모 분리
        word.word = split_syllables(word.word)
    # 단어 모음을 json화
    serializer = WordSerializer(response_word, many=True)
    # 응답
    return Response(serializer.data) 

