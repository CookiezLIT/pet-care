import {combineReducers} from "redux"
import {generalReducer} from "./generalReducer";
import {configureStore} from "@reduxjs/toolkit"
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key : "root",
    storage
}

const store = configureStore({reducer: persistReducer(persistConfig, combineReducers({general : generalReducer}))});
export const persistor = persistStore(store)

export default store;