import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonList, IonInput, IonLabel} from '@ionic/react';
import './PetHome.css';
import usePetHome from "../hooks/usePetHome";
import {getJWTToken} from "../utilities/getJWTToken";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setJWT} from "../redux/generalActions";
import {IGeneralReducer} from "../interfaces/IGeneralReducer";

const PetHome : React.FC = () => {

    const {connected, handleUserNameInput, handlePasswordInput, handleLoginClick} = usePetHome();


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
                    <IonInput id="password" className="login_input" type="password" onIonInput={handlePasswordInput}></IonInput>
                    <IonButton onClick={handleLoginClick}>Login</IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default PetHome;