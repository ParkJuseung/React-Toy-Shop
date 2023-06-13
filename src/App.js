import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js'


function App() {

  let [shoes] = useState(data)


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    </div>
  );
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
