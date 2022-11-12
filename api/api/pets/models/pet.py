from django.db import models

class Pet(models.Model):
    name = models.CharField(max_length=128)
    date_of_birth = models.DateField()
    is_adopted = models.BooleanField()
    age = models.IntegerField()


