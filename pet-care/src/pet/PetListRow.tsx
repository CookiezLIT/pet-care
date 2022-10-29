import { useState } from "react";
import { IPetListRow } from "../interfaces/IPetListRow";


const PetListRow : React.FC <IPetListRow> = ({birth_date, name}) => {

    const [hidden, setHidden] = useState<boolean>(false)

    const handleClick = () => {
        setHidden(!hidden)
    }

    return (
            <>
            <p onClick={handleClick}>{name}</p>
            {hidden&&
            <p >{birth_date}</p>
            }
            </>
    );
};

export default PetListRow;