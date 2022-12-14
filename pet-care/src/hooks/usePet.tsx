import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {IPetDetail} from '../interfaces/IPetDetail'

const usePet = (id : number) => {

    const [pet,setPet] = useState<IPetDetail>();

    const fetchPet = useCallback((id : number) => {
        console.log("Trying to get pet with id:" + id)
        axios.get("http://127.0.0.1:8000/pets/get_pet/" + id + "/").then((res)=>{
            console.log("Rest API get detail pet fetched")
            setPet(res.data)
        }).catch(err => {
            console.log(err)
        })}, [])

    useEffect(() => {
        fetchPet(id)
    },[fetchPet])

    return {pet}
};


export default usePet;