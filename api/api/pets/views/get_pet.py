from rest_framework.views import APIView
from pets.models.pet import Pet
from pets.serializers import PetSerializer
from django.http import JsonResponse

class GetPet(APIView):
    def get(self, request, id):
        try:
            pet = Pet.objects.filter(id=id).first()
            print(pet)
            json_pet = PetSerializer(pet).data
            return JsonResponse(json_pet)
        except Exception as e:
            return JsonResponse(str(e), safe=False)
