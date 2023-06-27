import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState: {name: 'park', age: 30},
    reducers: {
        // state 수정하는 함수 
        changeName(state){
           return state.name = 'kim'
        },
        increase(state){
            state.age = state.age + 1
        }
    }
})

//오른쪽 자료를 변수로 빼는 문법
export let { changeName, increase} = user.actions

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