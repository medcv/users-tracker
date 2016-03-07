from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class Labs(models.Model):
    lab_name = models.CharField(max_length=30, default=False)

    def __unicode__(self):
        return '{0}'.format(self.lab_name)
