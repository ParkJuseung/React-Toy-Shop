import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

// useState 역할
let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 0, name: 'White and Black', count: 2 },
        { id: 2, name: 'Grey Yordan', count: 1 }
    ]
})

//등록을 해야 사용 가능 
export default configureStore({
    reducer: {
        cart : cart.reducer,
        user : user.reducer
    }
})