from django.http import HttpRequest, JsonResponse
from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework.decorators import api_view
from app.models import Pet, Animal, Breed, Age, Size, Gender, Shelter, Volunteer
from app.serializers import PetSerializer, ImageSerializer, ShelterSerializer, VolunteerSerializer
from app.utils import *

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
def get_pet_images(request:HttpRequest):
    if request.method == "GET":
        if 'id' not in request.GET:
            return Response({'message': 'Payload format: ?id=pet_id'})
        if not Pet.objects.filter(id=request.GET['id']).exists():
            return Response({'message': 'Pet id does not exist'})

        pet = Pet.objects.get(id=request.GET['id'])
        images = [ImageSerializer(pet).image.url for pet in pet.images.all() ]

        return Response({'images': images})
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
def get_csrf_token(request: HttpRequest):
    """
    Handles GET requests to provide a CSRF token for secure client-server communication.

    Args:
        request (HttpRequest): The HTTP request object. Must be a 'GET' method.
        
    Returns:
        JsonResponse: 
            - On success (status 200): A JSON response containing the CSRF token.
            - On failure (status 400): A JSON response with an error message.
            - On unsupported methods (status 405): A JSON response indicating method not allowed.
    """
    if request.method == "GET":
        try:
            # Generate and retrieve the CSRF token
            csrf_token = get_token(request)
            return JsonResponse({"csrfToken": csrf_token}, status=200)
        except Exception as e:
            return JsonResponse({"error": f"Unable to generate CSRF token: {str(e)}"}, status=400)
    return JsonResponse({"error": "Method not supported. Allowed methods: \"GET\""}, status=405)


@api_view(['POST'])
def post_volunteer_information(request: HttpRequest):
    """
    Handles POST requests to save volunteer information into the Volunteer model.

    Args:
        request (HttpRequest): The HTTP request object. Must be a 'POST' method containing:
            - X-CSRFToken header: A valid CSRF token for authentication.
            - Volunteer data: A JSON payload containing the following fields:
                - firstName (string): The volunteer's first name.
                - lastName (string): The volunteer's last name.
                - age (string): The volunteer's age (must be a positive integer).
                - email (string): The volunteer's email address (must be valid).
                - contact (string): The volunteer's contact number (digits only).
                - address (string): The volunteer's address.
                
    Returns:
        JsonResponse: A JSON response containing:
            - A success message and the created volunteer's data (status 200).
            - Validation errors or a failure message (status 400).
            - An error message for unsupported methods (status 405).
    """
    if request.method == "POST":
        try:
            formData = request.data['data']
            serializer = VolunteerSerializer(formData=formData)
            
            if Volunteer.objects.filter(email=formData['email']).exists():
                return JsonResponse({"error": "A volunteer with this email already exists."}, status=400)   

            if serializer.is_valid():
                volunteer = serializer.save()
                send_volunteer_appreciation_email(volunteer)
                return JsonResponse({'message': 'Volunteer information saved successfully.'}, status=200)
            return JsonResponse({"error": f"Error Serializing: {serializer.errors}"}, status=400)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400) 
            
    return JsonResponse({"error": "Method not supported. Allowed methods: \"POST\""}, status=405)

@api_view(['GET'])
def check_email_exists(request: HttpRequest):
    """
    Checks if an email already exists in the Volunteer database.

    Args:
        request (HttpRequest): Must contain an 'email' query parameter.
    
    Returns:
        JsonResponse: A JSON response with the result of the email existence check.
        - If successful: { "exists": true/false } (status 200).
        - If email parameter is missing: { "error": "Email parameter is required." } (status 400).
        - If method is unsupported: { "error": "Method not supported. Allowed methods: 'GET'" }  (status 405).
    """
    if request.method == "GET":
        email = request.GET.get('email')
        
        if not email:
            return JsonResponse({"error": "Email parameter is required."}, status=400)

        exists = Volunteer.objects.filter(email=email).exists()
        return JsonResponse({"exists": exists}, status=200)
    
    return JsonResponse({"error": "Method not supported. Allowed methods: \"GET\""}, status=405)

@api_view(['GET'])
def sample_api(request:HttpRequest):
    if request.method == "GET":
        return Response({'message': 'Testing from Django Backend'})
    return Response({'message': 'Not Get Method'})
