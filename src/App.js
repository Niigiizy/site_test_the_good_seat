import { useEffect } from "react";
import Login from "./component/connexion/login";
import SignUp from "./component/connexion/signUp";
import { useSelector, useDispatch } from 'react-redux';
import { 
  create_account_etat_initialisation,
  connexion_etat_initialisation,
  getProviders
} from "./reducers/ConnectedReducers/ConnectedSlice";
import { currentView_actualisation } from "./reducers/globalReducers/globalSlice";

function App() {

  const dispatch = useDispatch()

  const currentView = useSelector((state) => state.global.currentView)
  const create_account_etat = useSelector((state) => state.connected.create_account_etat)
  const connexion_etat = useSelector((state) => state.connected.connexion_etat)
  const authInfo = useSelector((state) => state.connected.authInfo)

  useEffect(() => {
    if(create_account_etat === "terminer_reussi"){
      dispatch(create_account_etat_initialisation())
      dispatch(currentView_actualisation("connexion"))
    }
  },[create_account_etat])

  useEffect(() => {
    if(connexion_etat === "terminer_reussi"){
      dispatch(connexion_etat_initialisation())
      dispatch(currentView_actualisation("connected"))
    }
  },[connexion_etat])

  useEffect(() => {
    console.log("authInfo : ",authInfo)
    if (authInfo) {
      dispatch(getProviders(authInfo.token))
    }
  },[authInfo])

  return (
    <div 
      className="App"
      style={{
        display: "flex",
        height: "100%",
        width: "100%",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {
        currentView === "connexion" ?
        <Login/>
        :
        currentView === "signUp" ?
        <SignUp/>
        :
        currentView === "connected" ?
        <div>

        </div>
        :
        null
      }
    </div>
  );
}

export default App;
