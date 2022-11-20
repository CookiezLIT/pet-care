import {IGeneralReducer} from "../interfaces/IGeneralReducer";
import {AnyAction} from "redux"
import {GETJWT} from "./constants";

const initialState = {jwt_token : ""}

export const generalReducer = (state : IGeneralReducer = initialState, action : AnyAction = {type : "", payload : null}) => {
    switch (action.type) {
        case GETJWT : return {...state, jwt_token : action.payload};
        default : return state;
    }

}
