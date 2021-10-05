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
from collections import OrderedDict

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
    # 현재 유저 정보 가져오기
    user = get_object_or_404(get_user_model(), email=request.user.email)
    # user = get_object_or_404(get_user_model(), id=7)
    # 행맨
    if select_game == 3:
        # 현재 hangman 테이블에 이번에 들어온 유저 기록이 존재할 경우
        if user.hangman_set.filter(user=user.pk).exists():
            my_hangman = get_object_or_404(Hangman, user=user.pk)
            # print(my_hangman.__dict__)
            # 현재 점수보다 새로 들어온 점수가 클 경우에만 갱신
            if my_hangman.score < request.data['score']:
                serializer = HangmanSerializer(my_hangman, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    # 총점 갱신
                    user.total_score += request.data['score']-my_hangman.score
                    serializer.save()
            # 갱신 필요 X 바로 리턴
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        # 기록이 없으면 새롭게 Row 생성
        else:
            serializer = HangmanSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                # 총점 추가
                user.total_score += request.data['score']
                serializer.save(user=user)
    # 카드 뒤집기
    elif select_game == 2:
        if user.cardmatching_set.filter(user=user.pk).exists():
            my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
            if my_cardmatching.score < request.data['score']:
                serializer = CardMatchingSerializer(my_cardmatching, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    # 총점 갱신
                    user.total_score += request.data['score']-my_cardmatching.score
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = CardMatchingSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                # 총점 추가
                user.total_score += request.data['score']
                serializer.save(user=user)
    # 산성비
    elif select_game == 1:
        if user.acidrain_set.filter(user=user.pk).exists():
            my_acidrain = get_object_or_404(AcidRain, user=user.pk)
            if my_acidrain.score < request.data['score']:
                serializer = AcidRainSerializer(my_acidrain, data=request.data)
                if serializer.is_valid(raise_exception=True):
                    # 총점 갱신
                    user.total_score += request.data['score']-my_acidrain.score
                    serializer.save()
            else:
                return Response({'처리 안됨': '이유 - 점수가 낮음'}, status=status.HTTP_200_OK)
        else:
            serializer = AcidRainSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                # 총점 추가
                user.total_score += request.data['score']
                serializer.save(user=user)
    # 이외의 것은 모두 잘못된 요청
    else:
        return Response({'처리 안됨': '이유 - 잘못된 select_game'}, status=status.HTTP_400_BAD_REQUEST)
    user.save()
    # 응답
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
def ranking(request, select_game):
    # 행맨
    if select_game == 3:
        # hangman 테이블 상위 10개의 데이터안에 있는 유저 데이터 + 점수 데이터
        # SELECT score, FROM Hangman WHERE ORDER BY score ASC LIMIT 10 ??
        # hangman_list = get_list_or_404(Hangman.objects.order_by('-score'))[:10]
        serializer = HangmanSerializer(Hangman.objects.order_by('-score')[:10], many=True)
    # 카드 뒤집기
    elif select_game == 2:
        serializer = CardMatchingSerializer(CardMatching.objects.order_by('-score')[:10], many=True)
    # 산성비
    elif select_game == 1:
        serializer = AcidRainSerializer(AcidRain.objects.order_by('-score')[:10], many=True)
    # 이외의 것은 모두 잘못된 요청
    else:
        return Response({'처리 안됨': '이유 - 잘못된 select_game'}, status=status.HTTP_400_BAD_REQUEST)
    
    # 각 랭킹 1위부터 10위까지의 유저 id를 토대로 User 모델에서 가져와서 정보 넣기 
    # - 비효율적이지만 구현은 가능한 코드..
    response_data = OrderedDict()
    rank = 1
    for item in serializer.data:
        # print(item.get('id'))
        user = get_object_or_404(get_user_model(), id=item.get('user'))
        # print(user.tier.id)
        # print(user)
        response_data[rank] = {
            'user': item.get('user'),
            'score': item.get('score'),
            'tier': user.tier.id,
            'nickname': user.nickname,
            'email': user.email,
        }
        rank += 1

    # 응답
    # return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response({'response': response_data}, status=status.HTTP_201_CREATED)


# user_detail에 해당 정보를 포함하여 사용 X
# @api_view(['GET'])
# def my_ranking(request):
#     print(request.user)
#     # 현재 유저 정보 가져오기
#     # user = get_object_or_404(User, id=request.user.id)
#     user = get_object_or_404(get_user_model(), id=request.user.id)
#     # 행맨
#     # 현재 hangman 테이블에 이번에 요청한 유저 기록이 존재할 경우 데이터 가져오기
#     if user.hangman_set.filter(user=user.pk).exists():
#         my_hangman = get_object_or_404(Hangman, user=user.pk)
#         hangman_info = {
#             'rank': Hangman.objects.filter(score__gt=my_hangman.score).count() + 1,
#             'score': my_hangman.score,
#         }
#     # 기록이 없으면 0점으로 반환
#     else:
#         hangman_info = {
#             'rank': 0,
#             'score': 0,
#         }
#     # 카드 뒤집기
#     if user.cardmatching_set.filter(user=user.pk).exists():
#         my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
#         card_matching_info = {
#             'rank': CardMatching.objects.filter(score__gt=my_cardmatching.score).count() + 1,
#             'score': my_cardmatching.score,
#         }
#     else:
#         card_matching_info = {
#             'rank': 0,
#             'score': 0,
#         }
#     # 산성비
#     if user.acidrain_set.filter(user=user.pk).exists():
#         my_acidrain = get_object_or_404(AcidRain, user=user.pk)
#         acid_rain_info = {
#             'rank': AcidRain.objects.filter(score__gt=my_cardmatching.score).count() + 1,
#             'score': my_acidrain.score,
#         }
#     else:
#         acid_rain_info = {
#             'rank': 0,
#             'score': 0,
#         }
#     # 응답
#     return Response({'hangman': hangman_info, 'cardMatching': card_matching_info, 'acidRain': acid_rain_info}, status=status.HTTP_202_ACCEPTED)


