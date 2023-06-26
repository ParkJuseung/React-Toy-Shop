import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    // 모든 props를 redux에 넣는것은 좋지 않다
    //redux store의 내용을 가져옴(함수를 꼭 사용해줘야함)
    let redux = useSelector((state) => state)
    console.log(redux)

    return (
        <div>
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
                    <tr>
                        <td>1</td>
                        <td>안녕</td>
                        <td>안녕</td>
                        <td>안녕</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart