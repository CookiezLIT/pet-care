import {IonContent, IonList, IonPage} from "@ionic/react";
import usePetList from '../hooks/usePetList'

const PetList : React.FC = () => {

    const {petList} = usePetList()

    return (
        <IonPage>
            <IonContent>
                {petList&&
                    <IonList>
                        {petList.map((pet, i) => {
                            return (<div key={i}>{pet.name}</div>)
                        })}
                        </IonList>
                }
            </IonContent>
        </IonPage>)
};

export default PetList;