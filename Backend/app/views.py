from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from app.models import Pet, Animal, Breed, Age, Size, Gender, Shelter
from app.serializers import PetSerializer, ShelterSerializer

import logging
logger = logging.getLogger(__name__)

# Create your views here.

@api_view(['GET'])
def get_pet(request:HttpRequest):
    if request.method == "GET":
        if 'id' not in request.GET:
            return Response({'message': 'Payload format: ?id=pet_id'})
        if not request.GET['id'].isdigit():
            return Response({'message': 'id must be an integer'})
        if not Pet.objects.filter(id=request.GET['id']).exists():
            return Response({'message': 'Pet id does not exist'})

        pet = Pet.objects.get(id=request.GET['id'])
        response = PetSerializer(pet).dict_display()
        return Response({'pet': response})
    return Response({'message': 'Not Get Method'})

@api_view(['GET'])
def get_pets(request:HttpRequest):
    pets = Pet.objects.all()
    response = []
    for index, pet in enumerate(pets):
        response.append(PetSerializer(pet).dict_display())
    if request.method == "GET":
        return Response({'pets': response})
    return Response({'message': 'Not Get Method'})

@api_view(['GET'])
def get_recommended_pets(request:HttpRequest):
    if request.method == "GET":
        if 'id' not in request.GET:
            return Response({'message': 'Payload format: ?id=pet_id'})
        if not request.GET['id'].isdigit():
            return Response({'message': 'id must be an integer'})
        if not Pet.objects.filter(id=request.GET['id']).exists():
            return Response({'message': 'Pet id does not exist'})

        pet = Pet.objects.get(id=request.GET['id'])

        recommended_pets = sorted(
            # Get all pets except for the one requested
            Pet.objects.exclude(id=request.GET['id']),

            # Sort by the logic: 
            # 1. Same breed
            # 2. Same animal type
            key=lambda _pet: ( _pet.breed == pet.breed ) +
                             ( _pet.breed.animal_type == pet.breed.animal_type ),
            
            # Reverse so most similar pets are first
            reverse=True)

        # Get first 3 similar pets
        recommended = [PetSerializer(pet).dict_display() for pet in recommended_pets][:3]

        return Response({'pets': recommended})
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
def get_shelter(request:HttpRequest):
    if request.method == "GET":
        if 'id' not in request.GET:
            return Response({'message': 'Payload format: ?id=shelter_id'})
        if not Shelter.objects.filter(id=request.GET['id']).exists():
            return Response({'message': 'Shelter id does not exist'})

        shelter = Shelter.objects.get(id=request.GET['id'])

        return Response({'shelter': ShelterSerializer(shelter).dict_display()})
    return Response({'message': 'Not Get Method'})


@api_view(['GET'])
def sample_api(request:HttpRequest):
    if request.method == "GET":
        return Response({'message': 'Testing from Django Backend'})
    return Response({'message': 'Not Get Method'})
