import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuthenticated: false
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginSucess: (state,action) =>{
            state.user = action.payload
        }
    }
})

export const {loginSucess} = authSlice.actions

export default authSlice.reducer