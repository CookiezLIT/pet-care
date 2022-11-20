import {useCallback, useEffect, useState} from "react";
import axios from "axios";

export const getJWTToken = async (username : string, password : string) => {


    try{
        const responseData = await axios.post("http://127.0.0.1:8000/api/token/", {"username" : username, "password": password})


        //return JwtToken
        return {jwt_token : responseData.data.access}

    }catch (e) {
        console.log(e);
    }

}
