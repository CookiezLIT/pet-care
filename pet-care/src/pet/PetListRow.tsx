import { useState } from "react";
import { IPetListRow } from "../interfaces/IPetListRow";
import {IonButton, IonLabel} from "@ionic/react";
import "./PetListRow.css"
const PetListRow : React.FC <IPetListRow> = ({id, age, name}) => {

    const [hidden, setHidden] = useState<boolean>(false)

    const handleClick = () => {
        setHidden(!hidden)
    }

    return (
            <>
            <div className="pet_card">
                <p >{name}</p>
                <IonButton onClick={handleClick}>See more</IonButton>
                {hidden&&
                <div>
                    <div>
                        ID: {id}
                    </div>
                    <div>
                        Age : {age}
                    </div>

                    <IonLabel className="pet_detail_click" onClick={event =>  {

                        let redirect_url = "/pet/" + id
                        console.log("Redirecting to page" + redirect_url)
                        window.location.href=redirect_url
                    }}>Details</IonLabel>
                </div>
                }
            </div>
            </>
    );
};

export default PetListRow;