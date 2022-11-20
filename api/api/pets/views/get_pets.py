from rest_framework.views import APIView
from django.http import JsonResponse
from pets.models.pet import Pet
from pets.serializers import PetSerializer
from rest_framework.permissions import IsAuthenticated

class GetPets(APIView):
    #permission_classes = [IsAuthenticated]
    def get(self, request): 
        pets = Pet.objects.all()
        json_pets = PetSerializer(pets,many=True).data
        return JsonResponse(json_pets, safe=False)