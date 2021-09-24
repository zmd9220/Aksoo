from django.db import models

# Create your models here.
class AcidRain(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'acid_rain'


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


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class CardMatching(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'card_matching'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


# class Friend(models.Model):
#     from_user = models.ForeignKey('User', models.DO_NOTHING, db_column='from_user', blank=True, null=True)       
#     to_user = models.ForeignKey('User', models.DO_NOTHING, db_column='to_user', blank=True, null=True)

#     class Meta:
#         managed = False
#         db_table = 'friend'


class Hangman(models.Model):
    user = models.ForeignKey('User', models.DO_NOTHING)
    score = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'hangman'


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