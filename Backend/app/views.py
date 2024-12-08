from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from app.models import Pet, Animal, Breed, Age, Size, Gender, Shelter

import logging
logger = logging.getLogger(__name__)

# Create your views here.

@api_view(['GET'])
def get_pets(request:HttpRequest):
    pets = Pet.objects.all()
    response = []
    for index, pet in enumerate(pets):
        response.append({
            'id': index,
            'name': pet.name,
            'animal': pet.breed.animal_type.name,
            'breed': pet.breed.name,
            'age': pet.age.name,
            'size': pet.size.get_name_display(),
            'gender': pet.gender.get_name_display(),
            'shelter': pet.shelter.name,
            'imageSrc': "/image/default-image.png",
        })
    if request.method == "GET":
        return Response({'pets': response})
    return Response({'message': 'Not Get Method'})

@api_view(['GET'])
def get_static(request:HttpRequest):
    if request.method == "GET":
        static_dict = {
            "animals": Animal,
            "breeds": Breed,
            "ages": Age,
            "sizes": Size,
            "genders": Gender,
            "shelters": Shelter,
        }

        if 'name' not in request.GET:
            return Response({'message': 'Payload format: ?name=animal|breed|age|size|gender|shelter'})

        static_name = request.GET['name']
        if static_name not in static_dict.keys():
            return Response({'message': 'Available keys: animals, breeds, ages, sizes, genders, shelters'})

        shorthand_statics = ["breeds", "sizes", "genders"]
        data = [item.name if static_name not in shorthand_statics else item.get_name_display() for item in static_dict[static_name].objects.all()]

        return Response({'data': data})
    return Response({'message': 'Not Get Method'})

@api_view(['GET'])
def sample_api(request:HttpRequest):
    if request.method == "GET":
        return Response({'message': 'Testing from Django Backend'})
    return Response({'message': 'Not Get Method'})
