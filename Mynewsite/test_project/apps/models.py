from django.db import models

# Create your models here.
class User_details(models.Model):
    user_email=models.EmailField(max_length=254)
    user_passowerd=models.CharField(max_length=50)