import { createSlice } from "@reduxjs/toolkit"

const initialState = JSON.parse(localStorage.getItem("user"))||{
    user: null ,
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginSucess: (state,action) =>{
            state.user = action.payload
            state.isAuthenticated = true

            localStorage.setItem("user",JSON.stringify(state))// json stringify ->change object into json
        },
        logoutsucess: (state) =>{
         state.user = null
         state.isAuthenticated= false

         localStorage.removeItem("user")
        }
    }
})

export const {loginSucess, logoutsucess} = authSlice.actions

export default authSlice.reducer