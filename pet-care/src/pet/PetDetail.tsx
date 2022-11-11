import {IPetDetail} from "../interfaces/IPetDetail";
import usePet from "../hooks/usePet";
import {useParams} from "react-router";

const PetDetail = () => {

    let full_url_splitted = window.location.href.split('/')
    let query_param = parseInt(full_url_splitted[full_url_splitted.length -1])
    console.log("Display view for pet number" +  query_param)

    const {pet} = usePet(query_param);

    return (
            <>
            <div>
                <div>Pet name: {pet?.name}</div>
            </div>
            <div>
                <p>Pet id: {pet?.id}</p>
                <p>Pet age: {pet?.age}</p>
                <p>Pet is adopted: {pet?.is_adopted}</p>
                <p><>Pet date of birth: {pet?.date_of_birth}</></p>
            </div>
            </>
    )



}

export default PetDetail;