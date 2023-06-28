import { createSlice } from "@reduxjs/toolkit"

let user = createSlice({
    name : 'user',
    initialState: {name: 'park', age: 30},
    reducers: {
        // state 수정하는 함수 
        // state를 수정하는 함수를 action이라고 많이 씀 
        changeName(state){
           return state.name = 'kim'
        },
        increase(state, action){
            state.age = state.age + action.payload
        }
    }
})
export let {changeName, increase} = user.actions;
export default user;