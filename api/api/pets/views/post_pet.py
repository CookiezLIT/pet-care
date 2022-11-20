from rest_framework.views import APIView
from django.http import JsonResponse, HttpResponse
from pets.models.pet import Pet
from pets.serializers.pet_serializer import PetSerializer
from rest_framework.permissions import IsAuthenticated

class PostPet(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        serializer = PetSerializer(data=request.data)
        if serializer.is_valid():
            pet = serializer.save()
            return JsonResponse(PetSerializer(pet).data)
        else:
            print(serializer.errors)
            return HttpResponse(serializer.errors)

