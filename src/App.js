import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Detail from './Detail';
import Cart from './Cart';
import axios from 'axios'


function App() {
  useEffect(()=>
  localStorage.setItem('watched', JSON.stringify([]))
  )
  
  let [shoes, setshoes] = useState(data)


  //새로고침하면 데이터가 초기화되는게 싫으면 db에 저장해놔야 한다.
  // 원래는 백엔드에 저장해야 하지만 야매로 localstorage에 저장 할 수 있다.
  // session storage는 휘발성 
  // array나 object는 저장할 수 없지만 JSON형태로 바꾸면 가능함
  let obj = {name : 'kim'}
  // array/object를 JSON으로 변환
  // localStorage에 저장
  let 꺼낸거 =localStorage.setItem('data', JSON.stringify(obj));
  //JSON을 array/object로 저장 
  console.log(JSON.parse(꺼낸거))

  return (
    <div className="App">
    <Link to = "/detail">상세페이지</Link>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to = "/"><Nav.Link href="#home">Home</Nav.Link></Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>  
      <Route path = '/' element = {<Main shoes = {shoes}/>}/>
      <Route path = '/detail/:id' element = { <Detail shoes = {shoes}/>}/>
      <Route path = '/cart' element = {<Cart/>}/>
    </Routes>

     <button onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((data) => {
        let copy = [...shoes, ...data.data]
        setshoes(copy);
      })
      .catch(() => {
        console.log('error')
      })
     }}>더보기</button>
    </div>
  );
}

function Main(props){

  return(
    <>
    <div className='main-bg'/>
    <Container>
    <Row>
      {
        props.shoes.map(function(a, i){
          return (
            <Card shoes = {props.shoes[i]} i = {i+1}/>
          )
        })
      }
    </Row>
  </Container>
  </>
  )

}


function Card(props) {
  return (
    <Col sm>
          <img src = {'https://codingapple1.github.io/shop/shoes' + props.i +'.jpg'} width = "80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
