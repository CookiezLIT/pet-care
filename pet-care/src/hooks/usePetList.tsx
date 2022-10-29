import {useCallback, useEffect, useState, useMemo} from "react";
import axios from "axios";
import {IPetList} from '../interfaces/IpetList'

const usePetList =  () => {
    const [petList, setPetList] = useState<IPetList[]>([])
    const handleAddPet = () => {
        axios.post("http://127.0.0.1:8000/pets/add_pet", {id : "5", name : "Javra", birth_date : "2022-06-15"})
    }

    const fetchPets = useCallback(() => {
        axios.get("http://127.0.0.1:8000/pets").then((res)=>{
        console.log("Rest API get fetched")
        setPetList(res.data)
    }).catch(err => {
        console.log(err)
    })}, [])

    useEffect(() => {
            fetchPets()
        },[fetchPets])
    return {petList, handleAddPet}
};

export default usePetList;