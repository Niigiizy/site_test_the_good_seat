import { createAsyncThunk, createSlice, PayloadAction, Slice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    currentView: "connexion"
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        currentView_actualisation: (state, action) => {
            state.currentView = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export const { 
    currentView_actualisation,
} = globalSlice.actions

export default globalSlice.reducer