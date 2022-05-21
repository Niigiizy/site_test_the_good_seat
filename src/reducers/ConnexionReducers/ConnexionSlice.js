import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    email: "",
    password: "",
    messageErreur: "",
    connexion_etat: "non_commencer"
}

export const connexionSlice = createSlice({
    name: "connexion",
    initialState,
    reducers: {
        email_actualisation: (state, action) => {

        },
        password_actualisation: (state, action) => {

        },
        messageErreur_actualisation: (state, action) => {
            
        }
    },
    extraReducers: (builder) => {
    }
})

export const { 
    email_actualisation,
    password_actualisation,
    messageErreur_actualisation
} = connexionSlice.actions

export default connexionSlice.reducer