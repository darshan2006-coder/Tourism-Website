from django.db import models


class Destination(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    days = models.CharField(max_length=20)
    price = models.PositiveIntegerField()
    image = models.ImageField(upload_to="destinations/")
    description = models.TextField()

    def __str__(self):
        return self.name