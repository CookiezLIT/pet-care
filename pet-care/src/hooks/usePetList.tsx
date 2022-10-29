import {useEffect, useState} from "react";
import axios from "axios";
import {IPetList} from '../interfaces/IpetList'

const usePetList =  () => {
    const [petList, setPetList] = useState<IPetList[]>([])
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/pets").then((res)=>{
            console.log("Rest API called")
            setPetList(res.data)
        }).catch(err => {
            console.log(err)
        })
        },[])
    return {petList}
};

export default usePetList;