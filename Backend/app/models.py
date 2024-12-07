from django.db import models
from django.utils.translation import gettext as _
from static.models_resources import animals, breeds, genders, ages, sizes

class Image(models.Model):
    pet = models.ForeignKey("Pet", related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='pet_images/')

    def __str__(self):
        return f"{self.pet} Image DB ID: {self.pk}"

class Breed(models.Model):
    name = models.CharField(_("Breed Name"), max_length=50, choices=breeds)

    def __str__(self):
        return f"{self.name}"

class Animal(models.Model):
    name = models.CharField(_("Animal Name"), max_length=50, choices=animals)

    def __str__(self):
        return self.name

class Gender(models.Model):
    name = models.CharField(_("Gender"), max_length=10, choices=genders)

    def __str__(self):
        return f"{self.name}"

class Age(models.Model):
    name = models.CharField(_("Age"), max_length=10, choices=ages)

    def __str__(self):
        return f"{self.name}"

class Size(models.Model):
    name = models.CharField(_("Size"), max_length=10, choices=sizes)

    def __str__(self):
        return f"{self.name}"

class Geolocation(models.Model):
    longitude = models.DecimalField(_("Longitude"), max_digits=9, decimal_places=6)
    latitude = models.DecimalField(_("Latitude"), max_digits=9, decimal_places=6)

    def __str__(self):
        return f"Longitude: {self.longitude}, Latitude: {self.latitude}"

class Shelter(models.Model):
    name = models.CharField(_("Shelter Name"), max_length=50)
    location = models.OneToOneField(Geolocation, related_name='shelter', on_delete=models.CASCADE)
    contact_number = models.CharField(_("Contact Number"), max_length=50)
    email = models.EmailField(_("Email"), unique=True)
    link = models.URLField(_("Website Link"), max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

class Pet(models.Model):
    name = models.CharField(_("Name"), max_length=50)
    animal = models.ForeignKey(Animal, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    breed = models.ForeignKey(Breed, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    gender = models.ForeignKey(Gender, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    age = models.ForeignKey(Age, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    size = models.ForeignKey(Size, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    shelter = models.ForeignKey(Shelter, related_name='pet', blank=True, null=True, on_delete=models.SET_NULL)
    description = models.CharField(_("Pet Description"), max_length=100)
    medical_description = models.CharField(_("Medical Description"), max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

class Volunteer(models.Model):
    first_name = models.CharField(_("FName"), max_length=50, null=False, blank=False)
    last_name = models.CharField(_("LName"), max_length=50, null=False, blank=False)
    age = models.CharField(_("age"), max_length=50, null=False, blank=False)
    email = models.EmailField(_("Email"), unique=True)
    contact_number = models.CharField(_("Contact Number"), max_length=50)
    address = models.CharField(_("Address"), max_length=50, null=False, blank=False)
