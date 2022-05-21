import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    authInfo: null,
    providerRide: null,
    offersByPartner: null,
    isConnected: false,
    create_account_etat: "non_commencer",
    connexion_etat: "non_commencer",
    getProviders_etat: "non_commencer"
}

export const getProviders = createAsyncThunk(
    "connected/getProviders",
    async (token, { rejectWithValue }) => {

        try {

            console.log("token : ",token)
    
            let response = await axios.get(
                "http://testthegoodseat-env.eba-ws9kpeky.eu-west-3.elasticbeanstalk.com/ride/getproviders",
                {
                    headers: {
                        Authorization: token
                    }
                }
            )

            console.log("response.data : ",response.data)

            return response.data

        } catch (error) {

            return rejectWithValue(JSON.stringify(error))

        }

    }
)

export const connexion = createAsyncThunk(
    "connected/connexion",
    async (data, { rejectWithValue }) => {

        try {
    
            let response = await axios.post(
                "http://testthegoodseat-env.eba-ws9kpeky.eu-west-3.elasticbeanstalk.com/auth/login",
                // "http://localhost:3001/auth/login",
                data
            )

            console.log("response.data : ",response.data)

            return response.data

        } catch (error) {

            return rejectWithValue(JSON.stringify(error))

        }

    }
)

export const create_account = createAsyncThunk(
    "connected/create_account",
    async (data, { rejectWithValue }) => {

        try {
    
            let response = await axios.post(
                "http://testthegoodseat-env.eba-ws9kpeky.eu-west-3.elasticbeanstalk.com/auth/createuser",
                // "http://localhost:3001/auth/login",
                data
            )

            console.log("response.data : ",response.data)

            return response.data

        } catch (error) {

            return rejectWithValue(JSON.stringify(error))

        }

    }
)

export const connectedSlice = createSlice({
    name: "connected",
    initialState,
    reducers: {
        authInfo_initialisation: (state, action) => {

        },
        providerRide_initialisation: (state, action) => {

        },
        offersByPartner_initialisation: (state, action) => {

        },
        isConnected_actualisation: (state, action) => {

        },
        create_account_etat_initialisation: (state) => {
            state.create_account_etat = "non_commencer"
        },
        connexion_etat_initialisation: (state) => {
            state.connexion_etat = "non_commencer"
        }
    },
    extraReducers: (builder) => {
        builder.addCase( connexion.fulfilled, (state, action) => {
            console.log("action.payload dans connexion : ",action.payload)
            state.authInfo = action.payload
            state.connexion_etat = "terminer_reussi"
        } )
        builder.addCase( connexion.rejected, (state, action) => {
            state.connexion_etat = "erreur"
        } )
        builder.addCase( connexion.pending, (state, action) => {
            state.connexion_etat = "chargement"
        } )
        builder.addCase( create_account.fulfilled, (state, action) => {
            state.create_account_etat = "terminer_reussi"
        } )
        builder.addCase( create_account.rejected, (state, action) => {
            state.create_account_etat = "erreur"
        } )
        builder.addCase( create_account.pending, (state, action) => {
            state.create_account_etat = "chargement"
        } )
        builder.addCase( getProviders.fulfilled, (state, action) => {
            state.providerRide = action.payload
            state.getProviders_etat = "terminer_reussi"
        } )
        builder.addCase( getProviders.rejected, (state, action) => {
            state.getProviders_etat = "erreur"
        } )
        builder.addCase( getProviders.pending, (state, action) => {
            state.getProviders_etat = "chargement"
        } )
    }
})

export const { 
    authInfo_initialisation,
    providerRide_initialisation,
    offersByPartner_initialisation,
    isConnected_actualisation,
    create_account_etat_initialisation,
    connexion_etat_initialisation
} = connectedSlice.actions

export default connectedSlice.reducer