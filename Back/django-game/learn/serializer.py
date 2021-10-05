from rest_framework import serializers
from .models import Alphabet, AlphabetBookmark, Word


# 직렬화 - 해당 데이터 모델을 json화 하여 데이터를 보낼 수 있음 (rest_framework에서 지원)
# 직렬.모델직렬 - 현재 정의가 직렬화 정의모델임을 의미
class AlphabetSerializer(serializers.ModelSerializer):
    # 메타 데이터 부분에 이 클래스가 연결할 데이터 모델과 사용할 필드를 정의
    class Meta:
        model = Alphabet
        fields = '__all__'

class WordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Word
        fields = '__all__'

class AlphabetBookmarkSerializer(serializers.ModelSerializer):

    class Meta:
        model = AlphabetBookmark
        fields = '__all__'