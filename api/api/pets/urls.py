from rest_framework.urlpatterns import format_suffix_patterns
from django.urls import path

from pets.views.get_pets import GetPets
from pets.views.post_pet import PostPet
from pets.views.get_pet import GetPet
from pets.views.update_pet import UpdatePet

urlpatterns = [
    path('',GetPets.as_view()),
    path('add_pet/', PostPet.as_view()),
    path('get_pet/<int:id>/' ,GetPet.as_view()),
    path('update_pet/<int:id>', UpdatePet.as_view()),
]

format_suffix_patterns(urlpatterns)
    