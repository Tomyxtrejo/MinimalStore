import React from "react";
import plant  from "../assets/plants/plant5_2.png";
import { Col, Card } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function cardPlant({img,tittle}) {
    return (
        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
            <Card className="text-center cardPlants">
              <Card.Img variant="bottom" src={img} className="cardPlantsImg" />
              <Card.Body>
                <Card.Text className="cardPlantsName">
                  {tittle}
                </Card.Text>
                <Card.Title className="cardPlantsPrice">$450</Card.Title>
                <Card.Text className="cardPlantsTagline">
                 Envio gratis
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
}

export default cardPlant;