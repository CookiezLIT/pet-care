import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText, IonList, IonInput, IonLabel} from '@ionic/react';
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
                <IonList>
                    <IonLabel className="login_label">Username</IonLabel>
                    <IonInput id="username" className="login_input"></IonInput>
                    <IonLabel className="login_label">Password</IonLabel>
                    <IonInput id="password" className="login_input"></IonInput>
                    <IonButton>Login</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default PetHome;