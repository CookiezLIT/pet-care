import {IonContent, IonList, IonPage, IonText, IonFabButton} from "@ionic/react";
import usePetList from '../hooks/usePetList'
import { IPetList } from "../interfaces/IpetList";
import PetListRow from "./PetListRow";

const PetList : React.FC = () => {

    const {petList, handleAddPet} = usePetList()


    return (
        <IonPage>
            <IonContent>
                <IonText>
                    <div>Number of pets: {petList.length}</div>
                </IonText>
                {petList&&

                    <IonList>
                        {petList.map((pet, i) => <PetListRow key={i} name={pet.name} birth_date={pet.birth_date}/>)}
                    </IonList>
                }
                <IonFabButton onClick={handleAddPet}/>
            </IonContent>
        </IonPage>)
};

export default PetList;