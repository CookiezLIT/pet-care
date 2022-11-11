import {IPetDetail} from "../interfaces/IPetDetail";
import usePet from "../hooks/usePet";
import {useParams} from "react-router";
import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText} from '@ionic/react';

const PetDetail = () => {

    let full_url_splitted = window.location.href.split('/')
    let query_param = parseInt(full_url_splitted[full_url_splitted.length -1])
    console.log("Display view for pet number" +  query_param)

    const {pet} = usePet(query_param);

    return (

            <IonPage>
                <IonContent>
                    <h1>Pet name: {pet?.name}</h1>


                    <IonText><p>Pet id: {pet?.id}</p></IonText>
                    <IonText><p>Pet age: {pet?.age}</p></IonText>
                    <IonText><p>Pet is adopted: {pet?.is_adopted}</p></IonText>
                    <IonText><p><>Pet date of birth: {pet?.date_of_birth}</></p></IonText>
                </IonContent>
            </IonPage>
    )



}

export default PetDetail;