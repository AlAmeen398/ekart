import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtoCart:(state,action)=>{
            state.push(action.payload)
        },
        removeItemFromCartList:(state,action)=>{
            return state.filter(item=>item.id !== action.payload)
        },
        emptycart:(state)=>{
            return state=[];
        }
    }
})
export const {addtoCart,removeItemFromCartList,emptycart}=cartSlice.actions;
export default cartSlice.reducer;