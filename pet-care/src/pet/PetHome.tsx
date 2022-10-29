import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText} from '@ionic/react';
import './PetHome.css';

const PetHome : React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Pet Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton routerLink="/pets">Go to pet list</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default PetHome;