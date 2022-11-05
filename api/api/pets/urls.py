from django.urls import path
from pets.views.get_pet import GetPets
from pets.views.post_pet import PostPet

urlpatterns = [
    path('',GetPets.as_view()),
    path('add_pet/', PostPet.as_view())
]