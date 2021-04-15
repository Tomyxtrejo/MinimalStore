import React, { useState } from "react";
import logo from "./assets/logo.png";
import slide from "./assets/slide.jpg";
import { InputGroup, FormControl, Button, Row, Col, Badge, Container, Nav, Navbar, Image, Jumbotron } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import { TiSocialTwitter, TiSocialFacebook, TiSocialGithub, TiSocialPinterest } from 'react-icons/ti';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListPlants from './components/listPlants'


function App() {
  return (
    <header>
      <Navbar bg="none" expand="sm" fixed="top" style={{ backgroundColor: '#e7e7e7' }}>
        <div className="container">
          <Navbar.Brand href="#home">
            <Image src={logo} fluid style={{ width: '15rem' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#trends">Tendencias</Nav.Link>
              <Nav.Link href="#new">Novedades</Nav.Link>
            </Nav>
            <Nav.Link href="#cart">
              <FiShoppingCart style={{ fontSize: '2rem', color: '#ffffff' }} />
              <Badge pill className="plantBGPrimary">
                1
              </Badge>{' '}
            </Nav.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <Jumbotron style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'right', height: '23rem' }}>
        <Container style={{ marginTop: '6rem' }}>
          <h1 className="tittleH1">Tu tienda de plantas</h1>
          <p>
            Venimos a mejorar tu experiencia con el mundo de las plantas.
            Ofrecemos todo tipo de variedades para que encuentres
            la que mejor se adapte a vos.
          </p>
        </Container>
      </Jumbotron>
      <ListPlants
        tittle="Tendencias esta semana"
        anchor=""
        icon="" />

      <ListPlants
        tittle="Novedades"
        anchor=""
        icon="" />
      <div style={{ backgroundColor: '#1b1b1b', color: '#fff', padding: '7rem 0rem' }}>
        <Container>
          <Row>
            <Col>
              <h5>Está al tanto de los ultimos productos, tendencias y ofertas</h5>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Tu email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Ser parte</Button>
                </InputGroup.Append>
              </InputGroup>
            </Col>
            <Col>
              <h5>Plant Paradise</h5>
              <ul>
                <li>
                  <a href="#">Tienda</a>
                </li>
                <li>
                  <a href="#">¿Como funciona?</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Soporte</a>
                </li>
              </ul>




            </Col>
            <Col>
              <h5>Comunidad</h5>
              <ul>
                <li>
                  <a href="#">Grupo</a>
                </li>
                <li>
                  <a href="#">Foro</a>
                </li>
                <li>
                  <a href="#">Votación</a>
                </li>
                <li>
                  <a href="#">Sugerencias</a>
                </li>
              </ul>
            </Col>
            <Col>
              <h5>Seguinos</h5>
              <div className="h5">
                <TiSocialTwitter />
                <TiSocialFacebook />
                <TiSocialPinterest />
                <TiSocialGithub />
              </div>
            </Col>
          </Row>
        </Container>
      </div>


    </header>

  );
}

export default App;

