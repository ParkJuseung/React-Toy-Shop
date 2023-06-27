import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from './store';

function Cart() {
    // 모든 props를 redux에 넣는것은 좋지 않다
    //redux store의 내용을 가져옴(함수를 꼭 사용해줘야함)
    let state = useSelector((state) => state)
    //store.js로 요청을 보내주는 함수 
    let dispatch = useDispatch()

    return (
        <div>
            <h6>{state.user.name}의 장바구니{state.user.age}</h6>
            <button onClick={()=>{
                dispatch(increase())
            }}>버튼</button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cart.map((a,i) =>
                        <tr>
                            <td>{i}</td>
                            <td>{state.cart[i].name}</td>
                            <td>{state.cart[i].count}</td>
                            <td>안녕</td>
                        </tr>
                        ) 
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart