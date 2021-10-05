from django.db import models
# from accounts.models import User
from django.conf import settings

# 자음, 모음
class Alphabet(models.Model):
    image_url = models.CharField(max_length=100, blank=True, null=True)
    mean = models.CharField(max_length=45, blank=True, null=True)
    type = models.ForeignKey('AlphabetTypeCode', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet'

# 자모음 즐겨찾기
class AlphabetBookmark(models.Model):
    # user = models.ForeignKey(User, models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, models.DO_NOTHING, blank=True, null=True)
    alphabet = models.ForeignKey(Alphabet, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet_bookmark'

# 자모음 타입 코드(DB에서 확인용)
class AlphabetTypeCode(models.Model):
    type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet_type_code'

# 단어 종류 (DB에서 확인용)
class ThemeCode(models.Model):
    theme = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'theme_code'

# 단어
class Word(models.Model):
    word = models.CharField(max_length=45, blank=True, null=True)
    theme = models.ForeignKey(ThemeCode, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'word'

# 단어 즐겨찾기 - 현재로서는 사용 예정 X
class WordBookmark(models.Model):
    # user = models.ForeignKey(User, models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, models.DO_NOTHING, blank=True, null=True)
    word = models.ForeignKey(Word, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'word_bookmark'

