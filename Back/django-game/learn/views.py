from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
# from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Alphabet, Word
from .serializer import AlphabetSerializer, AlphabetBookmarkSerializer, WordSerializer

from hangul_utils import split_syllables, join_jamos

# con = 자음, vow = 모음, word = 단어 학습하기에 제공
@api_view(['GET'])
def get_words(request, select):
    if select == 'con':
        response_word = get_list_or_404(Alphabet, type=1)
        serializer = AlphabetSerializer(response_word, many=True)
    elif select == 'vow':
        response_word = get_list_or_404(Alphabet, type=2)
        serializer = AlphabetSerializer(response_word, many=True)
    elif select == 'word':
        response_word = Word.objects.all()[:10]
        # print(response_word)
        for word in response_word:
            # tmp = split_syllables(word.word)
            # print(tmp)
            word.word = split_syllables(word.word)
        serializer = WordSerializer(response_word, many=True)
    else:
        return Response({'error': '잘못된 select 키워드'}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data)    


# 즐겨찾기 (구현 X)
@api_view(['GET', 'POST'])
def bookmark(request):
    pass