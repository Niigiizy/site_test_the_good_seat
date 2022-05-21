import { useSelector, useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  currentView_actualisation
} from "../../reducers/globalReducers/globalSlice"
// import { 
//   email_actualisation,
//   password_actualisation,
//   messageErreur_actualisation 
// } from '../../reducers/ConnexionReducers/ConnexionSlice';
import { 
  connexion
} from '../../reducers/ConnectedReducers/ConnectedSlice';
import { useState } from 'react';

function Login() {

  const dispatch = useDispatch()
  const connexion_etat = useSelector((state) => state.connected.connexion_etat)

  const [email, set_email] = useState("")
  const [password, set_password] = useState("")
  const [showPassword, set_showPassword] = useState(false)
  // const email = useSelector((state) => state.connexion.email)
  // const password = useSelector((state) => state.connexion.password)
  const messageErreur = useSelector((state) => state.connexion.messageErreur)

  const email_on_change = (event) => {
    set_email(event.target.value)
  }

  const password_on_change = (event) => {
    set_password(event.target.value)
  }

  const signUp_clik = () => {
    dispatch(currentView_actualisation("signUp"))
  }

  const signIn_clik = () => {
    dispatch(connexion({
      email: email,
      password: password
    }))
  }

  const handleClickShowPassword = () => {
    set_showPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div 
      className="Login"
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
          id="email-login"
          label="email"
          value={email}
          onChange={email_on_change}
        />
        <TextField
          type={!showPassword?"password":"text"}
          style={{
            width: "80%",
            backgroundColor: "white"
          }}
          error={false}
          id="password-login"
          label="password"
          value={password}
          onChange={password_on_change}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                { showPassword ? <VisibilityOff /> : <Visibility /> }
              </IconButton>
            </InputAdornment>
          }
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
            onClick={signUp_clik}
            variant="contained"
          >
            créé un compte
          </Button>
          <Button
            onClick={signIn_clik}
            variant="contained"
          >
            connexion
          </Button>
        </div>
    </div>
  );

}
  
export default Login;