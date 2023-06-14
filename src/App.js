import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <Link to = "/detail">상세페이지</Link>

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Link to = "/">
            <Nav.Link href="#home">Home</Nav.Link>
            </Link>
              
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Routes>  
      <Route path = '/' element = {<Main/>}/>
      <Route path = '/detail' element = { <Detail/>}/>
      <Route path = '/about' element={<div>about페이지임</div>}/>
    </Routes>
     
    </div>
  );
}

function Main(props){
  let [shoes] = useState(data)
  return(
    <>
    <div className='main-bg'/>
    <Container>
    <Row>
      {
        shoes.map(function(a, i){
          return (
            <Card shoes = {shoes[i]}/>
          )
        })
      }
    </Row>
  </Container>
  </>
  )

}
function Detail(props) {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
      </div>
      <div className="col-md-6">
        <h4 className="pt-5">상품명</h4>
        <p>상품설명</p>
        <p>120000원</p>
        <button className="btn btn-danger">주문하기</button> 
      </div>
    </div>
  </div> 
  )
}

function Card(props) {
  return (
    <Col sm>
          <img src = {props.shoes.img} width = "80%"/>
          <h4>{props.shoes.title}</h4>
          <p>{props.shoes.price}</p>
    </Col>
  )
}

export default App;
