from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
from rest_framework.response import Response
from rest_framework import status
from .models import User, Alphabet, Word
from .serializer import AlphabetSerializer, AlphabetBookmarkSerializer, WordSerializer
from django.contrib.auth import get_user_model

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from hangul_utils import split_syllables, join_jamos

# Create your views here.
@api_view(['GET'])
def get_words(request, select):
    if select == 'con':
        response_word = get_list_or_404(Alphabet, type=1)
        serializer = AlphabetSerializer(response_word, many=True)
    elif select == 'vow':
        response_word = get_list_or_404(Alphabet, type=2)
        serializer = AlphabetSerializer(response_word, many=True)
    else:
        response_word = Word.objects.all()[:10]
        print(response_word)
        for word in response_word:
            # tmp = split_syllables(word.word)
            # print(tmp)
            word.word = split_syllables(word.word)
        serializer = WordSerializer(response_word, many=True)
    return Response(serializer.data)    
    
@api_view(['GET', 'POST'])
def bookmark(request):
    pass