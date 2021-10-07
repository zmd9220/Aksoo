from django.db import models
# from accounts.models import User
from django.conf import settings

# Create your models here.
class AcidRain(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # user = models.ForeignKey(User, models.DO_NOTHING)
    score = models.IntegerField()

    # class Meta:
    #     managed = False
    #     db_table = 'acid_rain'

class CardMatching(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,)
    # user = models.ForeignKey(User, models.DO_NOTHING)
    score = models.IntegerField()

    # class Meta:
        # managed = False
        # db_table = 'card_matching'


class Hangman(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    # user = models.ForeignKey(User, models.DO_NOTHING)
    score = models.IntegerField()

    # class Meta:
    #     managed = False
    #     db_table = 'hangman'


