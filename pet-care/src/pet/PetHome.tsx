import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText, IonList, IonInput, IonLabel} from '@ionic/react';
import './PetHome.css';
import usePetHome from "../hooks/usePetHome";
const PetHome : React.FC = () => {

    const {connected} = usePetHome();



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>LogIn</IonTitle>

                    <div className="online_status">
                        <div className={`${connected? "connected" : "not_connected"} circle`}></div>
                    </div>
                </IonToolbar>

            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">LogIn</IonTitle>
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