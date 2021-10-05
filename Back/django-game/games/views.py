from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
from django.contrib.auth import get_user_model

from rest_framework.response import Response
from rest_framework import serializers, status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication

from .models import Hangman, AcidRain, CardMatching
from .serializer import HangmanSerializer, AcidRainSerializer, CardMatchingSerializer
from learn.models import Word
from learn.serializer import WordSerializer 
# from accounts.models import User
from accounts.serializer import UserSerializer

from hangul_utils import split_syllables, join_jamos


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

@api_view(['POST'])
def set_score(request, select_game):
    print(request.user)
    # 현재 유저 정보 가져오기
    # user = get_object_or_404(User, id=request.user.id)
    user = get_object_or_404(get_user_model(), id=7)
    # 행맨
    if select_game == 3:
        # 현재 hangman 테이블에 이번에 들어온 유저 기록이 존재할 경우
        if user.hangman_set.filter(user=user.pk).exists():
            my_hangman = get_object_or_404(Hangman, user=user.pk)
            print(my_hangman.__dict__)
            # 현재 점수보다 새로 들어온 점수가 클 경우에만 갱신
            if my_hangman.score < request.data['score']:
                serializer = HangmanSerializer(my_hangman, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            # 갱신 필요 X 바로 리턴
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        # 기록이 없으면 새롭게 Row 생성
        else:
            serializer = HangmanSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 카드 뒤집기
    elif select_game == 2:
        if user.cardmatching_set.filter(user=user.pk).exists():
            my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
            if my_cardmatching.score < request.data['score']:
                serializer = CardMatchingSerializer(my_cardmatching, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = CardMatchingSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 산성비
    elif select_game == 1:
        if user.acidrain_set.filter(user=user.pk).exists():
            my_acidrain = get_object_or_404(AcidRain, user=user.pk)
            if my_acidrain.score < request.data['score']:
                serializer = AcidRainSerializer(my_acidrain, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = AcidRainSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 이외의 것은 모두 잘못된 요청
    else:
        return Response({'처리 안됨': '이유 - 잘못된 select_game'}, status=status.HTTP_400_BAD_REQUEST)
    # 응답
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
def ranking(request, select_game):
    # 행맨
    user = get_object_or_404(get_user_model(), id=7)
    if select_game == 3:
        # 현재 hangman 테이블에 이번에 들어온 유저 기록이 존재할 경우
        hangman_list = get_list_or_404(Hangman.objects.order_by('score'))
        if user.hangman_set.filter(user=user.pk).exists():
            my_hangman = get_object_or_404(Hangman, user=user.pk)
            print(my_hangman.__dict__)
            # 현재 점수보다 새로 들어온 점수가 클 경우에만 갱신
            if my_hangman.score < request.data['score']:
                serializer = HangmanSerializer(my_hangman, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            # 갱신 필요 X 바로 리턴
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        # 기록이 없으면 새롭게 Row 생성
        else:
            serializer = HangmanSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 카드 뒤집기
    elif select_game == 2:
        if user.cardmatching_set.filter(user=user.pk).exists():
            my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
            if my_cardmatching.score < request.data['score']:
                serializer = CardMatchingSerializer(my_cardmatching, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = CardMatchingSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 산성비
    elif select_game == 1:
        if user.acidrain_set.filter(user=user.pk).exists():
            my_acidrain = get_object_or_404(AcidRain, user=user.pk)
            if my_acidrain.score < request.data['score']:
                serializer = AcidRainSerializer(my_acidrain, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = AcidRainSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 이외의 것은 모두 잘못된 요청
    else:
        return Response({'처리 안됨': '이유 - 잘못된 select_game'}, status=status.HTTP_400_BAD_REQUEST)
    # 응답
    return Response(serializer.data, status=status.HTTP_201_CREATED)


def my_ranking(request):
    print(request.user)
    # 현재 유저 정보 가져오기
    # user = get_object_or_404(User, id=request.user.id)
    user = get_object_or_404(User, id=7)
    # 행맨
    if select_game == 3:
        # 현재 hangman 테이블에 이번에 들어온 유저 기록이 존재할 경우
        if user.hangman_set.filter(user=user.pk).exists():
            my_hangman = get_object_or_404(Hangman, user=user.pk)
            print(my_hangman.__dict__)
            # 현재 점수보다 새로 들어온 점수가 클 경우에만 갱신
            if my_hangman.score < request.data['score']:
                serializer = HangmanSerializer(my_hangman, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            # 갱신 필요 X 바로 리턴
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        # 기록이 없으면 새롭게 Row 생성
        else:
            serializer = HangmanSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 카드 뒤집기
    elif select_game == 2:
        if user.cardmatching_set.filter(user=user.pk).exists():
            my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
            if my_cardmatching.score < request.data['score']:
                serializer = CardMatchingSerializer(my_cardmatching, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = CardMatchingSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 산성비
    elif select_game == 1:
        if user.acidrain_set.filter(user=user.pk).exists():
            my_acidrain = get_object_or_404(AcidRain, user=user.pk)
            if my_acidrain.score < request.data['score']:
                serializer = AcidRainSerializer(my_acidrain, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = AcidRainSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save(user=user)
    # 이외의 것은 모두 잘못된 요청
    else:
        return Response({'처리 안됨': '이유 - 잘못된 select_game'}, status=status.HTTP_400_BAD_REQUEST)
    # 응답
    return Response(serializer.data, status=status.HTTP_201_CREATED)


