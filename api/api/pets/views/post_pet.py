from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from pets.models.pet import Pet
from pets.serializers.pet_serializer import PetSerializer

class PostPet(APIView):

    def post(self, request):
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            pet = serializer.save()
            return JsonResponse(PetSerializer(pet).data)
        else:
            print(serializer.errors)
            return HttpResponse(serializer.errors)

