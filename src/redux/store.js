import { configureStore } from "@reduxjs/toolkit"
import CardData from "./cartSlice"
import Wishlist from "./wishList"


const store = configureStore({
reducer:{
    wishListItems:Wishlist,
    cartItems:CardData
}
})
export default store