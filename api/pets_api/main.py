from fastapi import FastAPI
# from model import Pet
from fastapi.responses import JSONResponse
from pydantic import BaseModel
#
class Pet(BaseModel):
    id: int
    name: str
    birth_date: str

pets = [
    {'id' : 1, 'name' : "Max", 'birth_date' : "2022-04-20"},
    {'id' : 2, 'name' : "Tory", 'birth_date' : "2021-03-20"},
    {'id' : 3, 'name' : "Thomas", 'birth_date' : "2014-01-05"},
]

app = FastAPI()
@app.get("/pets")
async def get_pets():
    print("MUIE")
    print(pets)
    return JSONResponse(pets)

@app.get("/pets/{pet_id}")
async def get_pet(pet_id):
    try:
        pet_id = int(pet_id)
    except ValueError:
        return JSONResponse({})
    return pets[pet_id]

@app.post("/pets/add_pet", response_model=Pet)
async def add_pet(pet : Pet):
    print(pet)
    if pet:
        pets.append({'id': pet.id, 'name' : pet.name, 'birth_date' : pet.birth_date})
    return pet