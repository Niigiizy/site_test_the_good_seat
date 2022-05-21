import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    email: "",
    password: "",
    confirmPassword: "",
    lastName: "",
    firstName: "",
    phoneNumber: "",
    messageErreur: ""
}

export const signUpSlice = createSlice({
    name: "signUp",
    initialState,
    reducers: {
        email_actualisation: (state, action) => {
            state.email = action.payload
        },
        password_actualisation: (state, action) => {
            state.password = action.payload
        },
        confirmPassword_actualisation: (state, action) => {
            state.confirmPassword = action.payload
        },
        lastName_actualisation: (state, action) => {
            state.lastName = action.payload
        },
        firstName_actualisation: (state, action) => {
            state.firstName = action.payload
        },
        phoneNumber_actualisation: (state, action) => {
            state.phoneNumber = action.payload
        },
        messageErreur_actualisation: (state, action) => {
            state.messageErreur = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const { 
    email_actualisation,
    password_actualisation,
} = signUpSlice.actions

export default signUpSlice.reducer