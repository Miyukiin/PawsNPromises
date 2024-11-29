from django.shortcuts import render
from django.http import HttpRequest, JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

import logging
logger = logging.getLogger(__name__)

# Create your views here.

@api_view(['GET'])
def sample_api(request:HttpRequest):
    if request.method == "GET":
        return Response({'message': 'Testing from Django Backend'})
    return Response({'message': 'Not Get Method'})