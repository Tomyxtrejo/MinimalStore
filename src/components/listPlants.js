import React from "react";
import { Container, Row } from 'react-bootstrap';
import { AiOutlineFire } from 'react-icons/ai';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPlant from './cardPlant';
import plant1  from "../assets/plants/plant4_2.png";
import plant2  from "../assets/plants/plant5_2.png";
import plant3  from "../assets/plants/plant6_2.png";

function listPlants({tittle, anchor, icon}) {
    return (
        <Container className="section">
        <h1 className="tittleH1 mt-5 mb-4">
          {tittle}
          <AiOutlineFire className="plantPrimary"/>
          </h1>
        <Row>
          <CardPlant img={plant1} tittle="Adefecius Herbalicus Modernistic lanfibius"/>
          <CardPlant img={plant2} tittle="Marques delitalis bius"/>
          <CardPlant img={plant3} tittle="Instalius floripondius"/>
        </Row>
      </Container>
    );
}

export default listPlants;