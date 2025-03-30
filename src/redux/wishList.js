import { createSlice } from "@reduxjs/toolkit";

const wishListSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishList:(state,action)=>{
            state.push(action.payload)
        },
        removeItemFromWishlist:(state,action)=>{
            return state.filter(item=>item.id !== action.payload)
        }
    }
})
export const {addToWishList, removeItemFromWishlist}=wishListSlice.actions;
export default wishListSlice.reducer;