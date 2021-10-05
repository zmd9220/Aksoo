from django.shortcuts import render, get_object_or_404, get_list_or_404
# from .serializer import UserDetailSerializer, UserSerializer
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from rest_framework import serializers, status

from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from dj_rest_auth.jwt_auth import JWTCookieAuthentication

# from .models import User
from .models import TierCode
from .serializer import UserSerializer, UserDetailSerializer, SignInSerializer
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
# from rest_framework_jwt

# django drf-yasg(swagger)
from drf_yasg.utils import swagger_auto_schema


from hangul_utils import split_syllables, join_jamos


@api_view(['POST'])
@swagger_auto_schema(tags=["TO-DO 생성"], request_body=UserSerializer, query_serializer=UserSerializer)
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

# JWT 토큰 발급시 제공할 데이터 목록 (payload) 관리
def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': UserSerializer(user, context={'request': request}).data,
        # 'userId': user.pk
    }

@api_view(['GET'])
# JWT 토큰 확인
@authentication_classes([JWTCookieAuthentication])
# JWT 토큰 확인 후 인증 확인 되었을 때만 권한 부여
@permission_classes([IsAuthenticated])
@swagger_auto_schema(tags=["TO-DO 생성"], request_body=UserDetailSerializer, query_serializer=UserDetailSerializer)
def user_detail(request, user_pk):
    user = get_object_or_404(get_user_model(), pk=user_pk)
    # print(UserSerializer)
    # serializer = UserSerializer(user, followData=followData)
    # 상세 정보는 UserDetail로 변경
    serializer = UserDetailSerializer(user)
    # print(serializer.data)

    return Response(serializer.data)

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
        print(received_json_data)
        serializer = SignInSerializer(data=received_json_data)
        if serializer.is_valid():
            user = authenticate(
                request, 
                email=received_json_data['email'], 
                password=received_json_data['password'])
            if user is not None:
                refresh = RefreshToken.for_user(user)
                return JsonResponse({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    # your other stuffs <- add here
                    'email': user.email,
                    'id': user.id,
                    'tier': user.tier.id,
                }, status=200)
            else:
                return JsonResponse({
                    'message': 'invalid username or password',
                }, status=403)
        else:
            return JsonResponse({'message':serializer.errors}, status=400)



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

# @api_view(['POST'])
# simple_jwt를 이용한 JWT 토큰 발급 방법 2
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer