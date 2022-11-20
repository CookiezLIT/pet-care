import {IonContent, IonList, IonPage, IonText, IonFabButton} from "@ionic/react";
import usePetList from '../hooks/usePetList'
import PetListRow from "./PetListRow";
import "./PetList.css"
import {useSelector} from "react-redux";
import {IStore} from "../interfaces/IStore";


const PetList : React.FC = () => {

    const jwt_token = useSelector((state : IStore) => state.general.jwt_token);

    const {petList, handleAddPet} = usePetList(jwt_token)


    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <div className="pet_title">Number of pets: {petList.length}</div>
                </IonText>
                {petList&&

                    <IonList className="pet_list">
                        {petList.map((pet, i) => <PetListRow key={i} id={pet.id} name={pet.name} age={pet.age}/>)}
                    </IonList>
                }
                <IonFabButton onClick={handleAddPet}/>
            </IonContent>
        </IonPage>)
};

export default PetList;