import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {currentView_actualisation} from "../../reducers/globalReducers/globalSlice"
// import { 
//   email_actualisation,
//   password_actualisation,
//   messageErreur_actualisation 
// } from '../../reducers/ConnexionReducers/ConnexionSlice';
import { 
  create_account
} from '../../reducers/ConnectedReducers/ConnectedSlice';
import { useState } from 'react';

function SignUp() {

  const dispatch = useDispatch()

  const create_account_etat = useSelector((state) => state.connected.create_account_etat)

  const [email, set_email] = useState("")
  const [password, set_password] = useState("")
  const [phoneNumber, set_phoneNumber] = useState("")
  const [lastName, set_lastName] = useState("")
  const [firstName, set_firstName] = useState("")

  const signIn_clik = () => {
    dispatch(currentView_actualisation("connexion"))
  }

  const signUp_clik = () => {
    dispatch(create_account({
      email: email,
      password: password,
      phone_number: "+33612345678",
      lastName: lastName,
      firstName: firstName,
      isPhoneNumberVerified: true
    }))
  }
  const password_on_change = (event) => {
    set_password(event.target.value)
  }

  const email_on_change = (event) => {
    set_email(event.target.value)
  }

  const phone_on_change = (event) => {
    set_phoneNumber(event.target.value)
  }

  const lastname_on_change = (event) => {
    set_lastName(event.target.value)
  }

  const firstname_on_change = (event) => {
    set_firstName(event.target.value)
  }

  return (
    <div 
      className="SignUp"
      style={{
          borderRadius: 10,
          border: "solid",
          borderWidth: 1,
          borderColor: "grey",
          backgroundColor: "whitesmoke",
          width: 500,
          height: 500,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly"
      }}
    >
        <TextField
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="email-signup"
          label="email"
          value={email}
          onChange={email_on_change}
        />
        <TextField
          type={"password"}
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="password-signup"
          label="password"
          value={password}
          onChange={password_on_change}
        />
        <TextField
          type={"tel"}
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="numero-telephone"
          label="num. tel."
          value={phoneNumber}
          onChange={phone_on_change}
        />
        <TextField
          type={"tel"}
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="password-login"
          label="lastname"
          value={lastName}
          onChange={lastname_on_change}
        />
        <TextField
          type={"tel"}
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="password-login"
          label="firstname"
          value={firstName}
          onChange={firstname_on_change}
        />
        <div
          style={{
            display: "flex",
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Button
            onClick={signIn_clik}
            variant="contained"
          >
            connexion
          </Button>
          {
            create_account_etat === "chargement" ?
            <div>
              <p>
                creation en cours
              </p>
            </div>
            :
            <Button
              onClick={signUp_clik}
              variant="contained"
            >
              créé
            </Button>
          }
        </div>
    </div>
  );
}

export default SignUp;