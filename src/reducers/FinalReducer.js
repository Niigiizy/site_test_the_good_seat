import { combineReducers } from "redux"
import connectedReducer from "./ConnectedReducers/ConnectedSlice"
import connexionReducer from "./ConnexionReducers/ConnexionSlice"
import signUpReducer from "./SignUpReducers/SignUpSlice"
import globalReducer from "./globalReducers/globalSlice"

const reducerFinal = {
    connected: connectedReducer,
    connexion: connexionReducer,
    signUp: signUpReducer,
    global: globalReducer
}

const rootReducer = combineReducers(reducerFinal)

export default rootReducer