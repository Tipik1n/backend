from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Person(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    firstname = models.CharField(max_length=50, blank=True, null=True)
    lastname = models.CharField(max_length=50, blank=True, null=True)
    password = models.CharField(max_length=50, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    last_login = models.DateTimeField(auto_now=True, blank=True, null=True)
    last_activity = models.DateTimeField(auto_now=True, blank=True, null=True)

    def __str__(self):
        return self.user.username
