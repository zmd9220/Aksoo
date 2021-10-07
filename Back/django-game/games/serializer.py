from rest_framework import serializers
from .models import Hangman, AcidRain, CardMatching


# 직렬화 - 해당 데이터 모델을 json화 하여 데이터를 보낼 수 있음 (rest_framework에서 지원)
# 직렬.모델직렬 - 현재 정의가 직렬화 정의모델임을 의미
class HangmanSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hangman
        fields = '__all__'
        read_only_fields = ('user',)

class CardMatchingSerializer(serializers.ModelSerializer):

    class Meta:
        model = CardMatching
        fields = '__all__'
        read_only_fields = ('user',)

class AcidRainSerializer(serializers.ModelSerializer):

    class Meta:
        model = AcidRain
        fields = '__all__'
        read_only_fields = ('user',)


