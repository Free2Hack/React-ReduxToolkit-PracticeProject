import { createSlice } from "@reduxjs/toolkit";

const initialState={
    login:false,
    username:""
}

const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginAction:(state,action)=>{
            state.login=!state.login
        },
        usernameAction:(state,action)=>{
            state.username=action.payload
        }
    }
})

export default loginSlice.reducer
export const {loginAction,usernameAction}=loginSlice.actions