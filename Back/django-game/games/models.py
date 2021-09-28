from django.db import models

# Create your models here.
class AcidRain(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'acid_rain'

class CardMatching(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'card_matching'


class Hangman(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'hangman'

class Alphabet(models.Model):
    image_url = models.CharField(max_length=100, blank=True, null=True)
    mean = models.CharField(max_length=45, blank=True, null=True)
    type = models.ForeignKey('AlphabetTypeCode', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet'


class AlphabetBookmark(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)
    alphabet = models.ForeignKey(Alphabet, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet_bookmark'


class AlphabetTypeCode(models.Model):
    type = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'alphabet_type_code'

class ThemeCode(models.Model):
    theme = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'theme_code'


class TierCode(models.Model):
    tier = models.CharField(max_length=45, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tier_code'


class User(models.Model):
    email = models.CharField(max_length=45, blank=True, null=True)
    nickname = models.CharField(max_length=45, blank=True, null=True)
    password = models.CharField(max_length=45, blank=True, null=True)
    tier = models.ForeignKey(TierCode, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'


class Word(models.Model):
    word = models.CharField(max_length=45, blank=True, null=True)
    theme = models.ForeignKey(ThemeCode, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'word'


class WordBookmark(models.Model):
    user = models.ForeignKey(User, models.DO_NOTHING, blank=True, null=True)
    word = models.ForeignKey(Word, models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'word_bookmark'
