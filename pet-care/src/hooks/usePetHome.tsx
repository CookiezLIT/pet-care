import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {getJWTToken} from "../utilities/getJWTToken";
import {useDispatch} from "react-redux";
import {setJWT} from "../redux/generalActions";

const usePetHome = () => {

    const [connected, setConnected] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();



    //get value from the username and password inputs
    const handleUserNameInput = (e :any) => {
        setUserName(e.target.value)

    }
    const handlePasswordInput = (e : any) => {
        setPassword(e.target.value)
    }

    const handleLoginClick = async () => {
        const response = await getJWTToken(userName,password);
        console.log("Token from home")
        if (response?.jwt_token)
        {
            dispatch(setJWT(response.jwt_token));

            window.location.href = "/pets";
            return;
        }
        window.alert("Login failed!")

    }




    useEffect( () => {
        axios.get("http://127.0.0.1:8000/net_status/").then((res)=>{
            console.log("Net Status fetched")
            setConnected(true);
        }).catch(err => {
            console.log(err)
            setConnected(false);
        }
        )}, [] )
    
    return {connected, handleUserNameInput, handlePasswordInput, handleLoginClick};
}

export default usePetHome;