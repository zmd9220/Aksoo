from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import serializers, status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from dj_rest_auth.jwt_auth import JWTCookieAuthentication

# from .models import User
from .models import TierCode
from .serializer import UserSerializer, UserDetailSerializer, SignInSerializer, UserRankSerializer
from games.models import Hangman, AcidRain, CardMatching
from games.serializer import HangmanSerializer, AcidRainSerializer, CardMatchingSerializer
from learn.models import Word
from learn.serializer import WordSerializer

# django jwt 토큰 발급시 추가 데이터를 담기 위해 import 1
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.views import APIView
from django.http import JsonResponse
from django.contrib.auth import authenticate
# django jwt 토큰 발급시 추가 데이터를 담기 위해 import 2
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


# django drf-yasg(swagger)
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from hangul_utils import split_syllables, join_jamos

test_param = openapi.Parameter('test', openapi.IN_QUERY, description="test manual param", type=openapi.TYPE_BOOLEAN)
user_response = openapi.Response('response description', UserSerializer)


# @swagger_auto_schema(tags=["TO-DO 생성"], request_body=UserSerializer, query_serializer=UserSerializer)
@swagger_auto_schema(method='post', request_body=UserSerializer, manual_parameters=[test_param], responses={200: user_response})
# 'methods' can be used to apply the same modification to multiple methods
# @swagger_auto_schema(method='post', request_body=UserSerializer)
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
        user.set_password(request.data.get('password'))
        user.save()
    # password는 write_only 이므로 직렬화 과정에는 포함 되지만 표현(response)할 때는 나타나지 않는다. 
    return Response(serializer.data, status=status.HTTP_201_CREATED)


# JWT 토큰 확인
@authentication_classes([JWTCookieAuthentication])
# JWT 토큰 확인 후 인증 확인 되었을 때만 권한 부여
@permission_classes([IsAuthenticated])
@swagger_auto_schema(method='get', tags=["TO-DO 생성"], query_serializer=UserDetailSerializer)
@api_view(['GET'])
def user_detail(request, user_pk):
    user = get_object_or_404(get_user_model(), pk=user_pk)
    # print(UserSerializer)
    # serializer = UserSerializer(user, followData=followData)
    # 상세 정보는 UserDetail로 변경
    serializer = UserDetailSerializer(user)
    print(serializer.data)
    # 행맨
    # 현재 hangman 테이블에 이번에 요청한 유저 기록이 존재할 경우 데이터 가져오기
    if user.hangman_set.filter(user=user.pk).exists():
        my_hangman = get_object_or_404(Hangman, user=user.pk)
        hangman_info = {
            'rank': Hangman.objects.filter(score__gt=my_hangman.score).count() + 1,
            'score': my_hangman.score,
        }
    # 기록이 없으면 0점으로 반환
    else:
        hangman_info = {
            'rank': 0,
            'score': 0,
        }
    # 카드 뒤집기
    if user.cardmatching_set.filter(user=user.pk).exists():
        my_cardmatching = get_object_or_404(CardMatching, user=user.pk)
        card_matching_info = {
            'rank': CardMatching.objects.filter(score__gt=my_cardmatching.score).count() + 1,
            'score': my_cardmatching.score,
        }
    else:
        card_matching_info = {
            'rank': 0,
            'score': 0,
        }
    # 산성비
    if user.acidrain_set.filter(user=user.pk).exists():
        my_acidrain = get_object_or_404(AcidRain, user=user.pk)
        acid_rain_info = {
            'rank': AcidRain.objects.filter(score__gt=my_acidrain.score).count() + 1,
            'score': my_acidrain.score,
        }
    else:
        acid_rain_info = {
            'rank': 0,
            'score': 0,
        }
    # 응답
    return Response({
            'userData': {
                'hangman': hangman_info, 'cardMatching': card_matching_info, 'acidRain': acid_rain_info,
                'userDetail': serializer.data,
                },
            }, status=status.HTTP_202_ACCEPTED)
    # return Response(serializer.data)


# 토큰 발급 커스텀을 위한 기본 코드
# def get_tokens_for_user(user):
#     refresh = RefreshToken.for_user(user)

#     return {
#         'refresh': str(refresh),
#         'access': str(refresh.access_token),
#     }


# @api_view(['POST'])
# simple_jwt를 이용한 JWT 토큰 발급 방법 1
class signin(APIView):
    permission_classes = ()
    authentication_classes = ()

    def post(self, request):
        received_json_data=request.data
        # print(received_json_data)
        serializer = SignInSerializer(data=received_json_data)
        if serializer.is_valid():
            user = authenticate(
                request, 
                email=received_json_data['email'], 
                password=received_json_data['password'])
            if user is not None:
                refresh = RefreshToken.for_user(user)
                # print(AcidRain.objects.get(user_id=user.id))
                # print(CardMatching.objects.filter(user_id=user.id).first())
                return JsonResponse({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    # your other stuffs <- add here
                    'email': user.email,
                    'id': user.id,
                    'tier': user.tier.id,
                    'nickname': user.nickname,
                    'games': UserRankSerializer(user).data
                }, status=200)
            else:
                return JsonResponse({
                    'message': 'invalid username or password',
                }, status=403)
        else:
            return JsonResponse({'message':serializer.errors}, status=400)


# @api_view(['POST'])
# simple_jwt를 이용한 JWT 토큰 발급 방법 2
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['email'] = self.user.email
        data['id'] = self.user.pk
        data['tier'] = self.user.tier.id
        print(self.user.tier.id)
        # data['groups'] = self.user.groups.values_list('name', flat=True)
        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET', 'POST'])
# 인증 여부 판단
@authentication_classes([JWTCookieAuthentication])
# 인증 확인 되었을 때만 권한 부여
@permission_classes([IsAuthenticated])
def follow(request, user_pk):
    # 현재 팔로우 될 유저 객체(요청 받은 아이디 = 대상)
    person = get_object_or_404(get_user_model(), pk=user_pk)
    # 현재 팔로우 할 유저 객체(현재 접속 중인 유저 = 나)
    user = request.user
    if request.method == 'GET':
        # 현재 해당 유저의 팔로우 여부 반환
        return Response({'isFollow': person.followers.filter(pk=user.pk).exists()})
    else: # POST
        # 현재 접속한 유저가 자신에게 팔로우하는 것을 막기
        if person != user:
            if person.followers.filter(pk=user.pk).exists():
                person.followers.remove(user)
                isFollow = False
            else:
                person.followers.add(user)
                isFollow = True
            # isFollow와 followData만 알면 되므로 시리얼라이저가 필요없음
            followData = {
                'fiCnt' : user.followers.count(),
                'fwCnt' : user.followings.count(),
            }
            # return Response(response_data, status=200)
            return Response({'isFollow': isFollow, 'followData': followData})
        return Response({'error': '본인 계정에는 팔로우를 할 수 없습니다.'}, status=status.HTTP_400_BAD_REQUEST)