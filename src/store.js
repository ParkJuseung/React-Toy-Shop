import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 역할
let username = createSlice({
    name : 'username',
    initialState : '박주승'
})
let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12]
})

//등록을 해야 사용 가능 
export default configureStore({
    reducer: {
        user : username.reducer,
        stock : stock.reducer
    
    }
})