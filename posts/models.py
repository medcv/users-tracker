from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class Posts(models.Model):
    lab_name = models.CharField(max_length=30, default='')
    browser = models.BooleanField(default=False)
    resume = models.BooleanField(default=False)
    job = models.BooleanField(default=False)
    video = models.BooleanField(default=False)
    game = models.BooleanField(default=False)
    email = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return '{0}'.format(self.lab_name)
