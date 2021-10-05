from rest_framework import serializers, viewsets, status
# from .models import User
from django.contrib.auth import get_user_model

# 현재 어떤 유저 모델인지 개발마다 다르기 때문에 get_user_model이라는 함수로 명확히 가져올 수 있도록함
User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    class Meta:
        model = User
        fields = ('id', 'email', 'nickname', 'password')
        read_only_fields = ('tier',)


class FollowDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'email', 'nickname', 'tier')

class UserDetailSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    
    # 팔로우 데이터를 얻기위해 커스텀 시리얼라이저 메소드로 가져오기
    # followData = serializers.DictField(child=serializers.CharField(), read_only=True)
    followData = serializers.SerializerMethodField()
    def get_followData(self, obj):
        return { 'followerCnt': obj.followers.count(), 
            'followingCnt': obj.followings.count(), 
            'followingData': FollowDetailSerializer(obj.followings.all(), many=True).data, 
        }

    # review_like_Data = serializers.SerializerMethodField()
    # def get_review_like_Data(self, obj):
    #     return { 'reviewData': Review.objects.value_lists(pk=obj.pk), 'likeData': obj.like_reviews.value_lists(), }

    class Meta:
        model = User
        fields = ('id', 'email', 'nickname', 'password', 'followData', 'tier', 'total_score')

# class UserRankSerializer(serializers.ModelSerializer):
#     hangman_rank = serializers.SerializerMethodField()
#     def get_hangman_rank(self, obj):    
#         return {
#         'rank': obj.hangman_set.filter(score__gt=my_hangman.score).count() + 1,
#         'score': my_hangman.score,
#         }
#     class Meta:
#         model = User

class SignInSerializer(serializers.Serializer):
    email = serializers.CharField(max_length=255, required=True)
    password = serializers.CharField(max_length=255, required=True, write_only=True)