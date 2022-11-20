import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonText, IonList, IonInput, IonLabel} from '@ionic/react';
import './PetHome.css';
import usePetHome from "../hooks/usePetHome";
import {getJWTToken} from "../utilities/getJWTToken";
import {useState} from "react";
const PetHome : React.FC = () => {

    const {connected} = usePetHome();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    //get value from the username and password inputs
    const handleUserNameInput = (e :any) => {
        setUserName(e.target.value)

    }
    const handlePasswordInput = (e : any) => {
        setPassword(e.target.value)
    }

    const handleLoginClick = async () => {
        const response = await getJWTToken(userName,password);
        console.log("Token from home")
        response?.jwt_token?
        window.location.href = "/pets"
        :
        window.alert("Login failed!")

    }

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
                    <IonInput id="username" className="login_input" onIonInput={handleUserNameInput}></IonInput>
                    <IonLabel className="login_label">Password</IonLabel>
                    <IonInput id="password" className="login_input" onIonInput={handlePasswordInput}></IonInput>
                    <IonButton onClick={handleLoginClick}>Login</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default PetHome;