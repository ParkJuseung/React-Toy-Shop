import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import data from './data.js'


function App() {

  let [shoes] = useState()

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
        <Col sm>
          <img src= "https://codingapple1.github.io/shop/shoes1.jpg" width = "80%"/>
          <h4>{data[0].title}</h4>
          <p>{data[0].content}</p>
        </Col>
        <Col sm>
          <img src= "https://codingapple1.github.io/shop/shoes2.jpg" width = "80%"/>
          <h4>{data[1].title}</h4>
          <p>{data[1].content}</p>
        </Col>
        <Col sm>
          <img src= "https://codingapple1.github.io/shop/shoes3.jpg" width = "80%"/>
          <h4>{data[2].title}</h4>
          <p>{data[2].content}</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
