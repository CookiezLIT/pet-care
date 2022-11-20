import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const usePetHome = () => {

    const [connected, setConnected] = useState(false);

    useEffect( () => {
        axios.get("http://127.0.0.1:8000/net_status/").then((res)=>{
            console.log("Net Status fetched")
            setConnected(true);
        }).catch(err => {
            console.log(err)
            setConnected(false);
        }
        )}, [] )
    
    return {connected};
}

export default usePetHome;