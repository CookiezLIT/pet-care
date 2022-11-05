import { useState } from "react";
import { IPetListRow } from "../interfaces/IPetListRow";


const PetListRow : React.FC <IPetListRow> = ({age, name}) => {

    const [hidden, setHidden] = useState<boolean>(false)

    const handleClick = () => {
        setHidden(!hidden)
    }

    return (
            <>
            <p onClick={handleClick}>{name}</p>
            {hidden&&
            <p >{age}</p>
            }
            </>
    );
};

export default PetListRow;