import {GETJWT} from "./constants";

export const setJWT = (payload : {jwt_token : string}) => {
    return {
        type : GETJWT,
        // same name for key and value
        payload,
    }
}