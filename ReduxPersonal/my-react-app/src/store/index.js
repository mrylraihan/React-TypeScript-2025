import {createSlice, configureStore} from '@reduxjs/toolkit';
import nameSlice from './nameSlice';

const initialState = {
    count:0
}

const countSlice = createSlice({
    name:"countSlice",
    initialState,
    reducers:{
        countUp:(state)=>{
            state.count = state.count + 1
            
            
        },
        countDown:(state)=>{
            state.count = state.count - 1
            
        },
        countSum:(state, action)=>{
            state.count = state.count + +action.payload.num
            
        }
    }
    
})

const store = configureStore({reducer:{counterSlice:countSlice.reducer , nameSlice:nameSlice.reducer}})
export const countActions = countSlice.actions
export default store
