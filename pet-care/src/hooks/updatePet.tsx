import axios from "axios";

const updatePet = (id : number | undefined,
                   name : string | undefined,
                   age : number | undefined,
                   date_of_birth : string | undefined,
                   is_adopted : boolean | undefined) => {
    console.log("Pet update tried")
    axios.put("http://127.0.0.1:8000/pets/update_pet/" + id,
              {name : name,
                date_of_birth : date_of_birth,
                is_adopted : is_adopted,
                age : age
              });
    // can be improved!
    window.location.reload();
}

export default updatePet;