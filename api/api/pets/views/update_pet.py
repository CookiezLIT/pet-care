from rest_framework.views import APIView
from django.http import HttpResponse, Http404
from pets.models.pet import Pet
from pets.serializers.pet_serializer import PetSerializer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

class UpdatePet(APIView):
    #permission_classes = [IsAuthenticated]
    
    def get_object(self, pk):
        try:
            return Pet.objects.get(pk=pk)
        except Pet.DoesNotExist:
            raise Http404

    def put(self, request, id):
        print("Request data for put")
        print(request.data)
        pet = self.get_object(id)
        serializer = PetSerializer(pet,request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
