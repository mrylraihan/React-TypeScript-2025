import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name:"nameSlice",
    initialState:{firstName:"", lastName:"", fullName:""},
    reducers:{
        getFirstName:(state, action)=>{
            state.firstName = action.payload.firstName
        },
        getLastName:(state, action)=>{
            state.lastName=action.payload.lastName
        },
        getFullName:(state)=>{
            state.fullName=`${state.firstName} ${state.lastName}`;
            state.firstName=""; 
            state.lastName="";
        },
        // Old way
        // getFirstName:(state, action)=>{
        //     return {...state, firstName:action.payload.firstName}
        // },
        // getLastName:(state, action)=>{
        //     return {...state, lastName:action.payload.lastName}
        // },
        // getFullName:(state)=>{
        //     return {...state, fullName:`${state.firstName} ${state.lastName}`, firstName:"", lastName:""}
        // },
    }
})

export const nameActions = nameSlice.actions

export default nameSlice