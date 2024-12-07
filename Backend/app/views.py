from django.http import HttpRequest
from rest_framework.response import Response
from rest_framework.decorators import api_view
from app.models import Pet

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
            'animal': pet.animal.name,
            'name': pet.name,
            'age': pet.age.name,
            'breed': pet.breed.get_name_display(),
            'imageSrc': "/image/default-image.png",
        })
    if request.method == "GET":
        return Response({'pets': response})
    return Response({'message': 'Not Get Method'})

@api_view(['GET'])
def sample_api(request:HttpRequest):
    if request.method == "GET":
        return Response({'message': 'Testing from Django Backend'})
    return Response({'message': 'Not Get Method'})
