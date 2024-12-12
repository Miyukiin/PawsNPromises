"""
URL configuration for PawsAndPromisesProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from .views import *

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/sample/', sample_api, name="sample_api"),
    path('api/pet/', get_pet, name="get_pet"),
    path('api/pet/images/', get_pet_images, name="get_pet_images"),
    path('api/pets/', get_pets, name="get_pets"),
    path('api/pets/recommended/', get_recommended_pets, name="get_recommended_pets"),
    path('api/static/', get_static, name="get_static"),
    path('api/shelter/', get_shelter, name="get_shelter"),
    path("api/csrf-token/", get_csrf_token, name="get_csrf_token"),
    path("api/volunteer/", post_volunteer_information, name="post_volunteer_information"),
    path('api/volunteer/check-email/', check_email_exists, name='check_email_exists'),
    path('api/pets/featured/', get_featured_pets, name="get_featured_pets"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
