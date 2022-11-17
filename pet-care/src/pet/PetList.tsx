import {IonContent, IonList, IonPage, IonText, IonFabButton} from "@ionic/react";
import usePetList from '../hooks/usePetList'
import { IPetList } from "../interfaces/IpetList";
import PetListRow from "./PetListRow";
import "./PetList.css"
const PetList : React.FC = () => {

    const {petList, handleAddPet} = usePetList()


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