import {IPetDetail} from "../interfaces/IPetDetail";
import usePet from "../hooks/usePet";
import {useParams} from "react-router";
import {
    IonContent,
    IonLabel,
    IonPage,
    IonButton,
    IonText,
    IonList,
    IonInput,
    IonCheckbox
} from '@ionic/react';
import {useState} from "react";
import updatePet from "../hooks/updatePet";
import './PetDetail.css'

const PetDetail = () => {

    const [editable, setEditable] = useState<boolean>(true);

    let full_url_splitted = window.location.href.split('/')
    let query_param = parseInt(full_url_splitted[full_url_splitted.length -1])
    console.log("Display view for pet number" +  query_param)

    const handleEditClick = () => {
        setEditable(!editable)
    }

    const handleUpdateClick = () => {

        let new_pet_name = (document.getElementById('pet_name_input') as HTMLInputElement).value
        let new_pet_age = Number((document.getElementById('pet_age_input') as HTMLInputElement).value)
        let new_pet_date_of_birth = (document.getElementById('pet_date_of_birth_input') as HTMLInputElement).value
        let new_pet_is_adopted = Boolean((document.getElementById('pet_is_adopted_input') as HTMLInputElement).value)
        console.log(new_pet_date_of_birth)
        updatePet(pet?.id,
                  new_pet_name,
                  new_pet_age,
                  new_pet_date_of_birth,
                  new_pet_is_adopted,
                    )
    }

    const {pet} = usePet(query_param);
    return (

            <IonPage>
                <IonContent>
                    <h1>Pet name: {pet?.name}</h1>

                    {editable ?
                    <>
                    <IonList>
                        <IonText><p>Pet id: {pet?.id}</p></IonText>
                        <IonText><p>Pet age: {pet?.age}</p></IonText>
                        <IonText><p>Pet is adopted: True</p></IonText>
                        <IonText><p><>Pet date of birth: {pet?.date_of_birth}</></p></IonText>
                    </IonList>
                    </>
                    :
                    <>
                    <IonList className="pet_list">
                        <IonLabel className="pet_label">Pet name</IonLabel>
                        <IonInput id="pet_name_input" className="pet_input"></IonInput>

                        <IonLabel className="pet_label">Pet age</IonLabel>
                        <IonInput id="pet_age_input" className="pet_input"></IonInput>
                        <div className="pet_adopted_wrapper">
                            <IonLabel className="pet_label">Pet is adopted</IonLabel>
                            <IonCheckbox id="pet_is_adopted_input" className="pet_input"></IonCheckbox>
                        </div>
                        <IonLabel className="pet_label">Pet date of birth</IonLabel>
                        <IonInput placeholder="year-month-day" id="pet_date_of_birth_input" className="pet_input"></IonInput>
                    </IonList>

                    <IonButton onClick={handleUpdateClick}>Update Pet</IonButton>
                    </>
                    }
                    <IonButton onClick={handleEditClick}>Edit</IonButton>
                </IonContent>
            </IonPage>
    )



}

export default PetDetail;