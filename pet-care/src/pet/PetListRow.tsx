import { useState } from "react";
import { IPetListRow } from "../interfaces/IPetListRow";
import {IonButton} from "@ionic/react";

const PetListRow : React.FC <IPetListRow> = ({id, age, name}) => {

    const [hidden, setHidden] = useState<boolean>(false)

    const handleClick = () => {
        setHidden(!hidden)
    }

    return (
            <>
            <p onClick={handleClick}>{name}</p>
            {hidden&&
            <div>
                <div>
                    ID: {id}
                </div>
                <div>
                    Age : {age}
                </div>
                <br/>

                <IonButton onClick={event =>  {

                    let redirect_url = "/pet/" + id
                    console.log("Redirecting to page" + redirect_url)
                    window.location.href=redirect_url
                }}>Details</IonButton>
                <br/>
            </div>
            }
            </>
    );
};

export default PetListRow;