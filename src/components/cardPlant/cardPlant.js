import React from "react";
import { Col, Card } from 'react-bootstrap';
import '../../App.css';
import './cardPlant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import plant1 from '../../assets/plants/plant1_2.png';

function cardPlant({name,description, price}) {
    return (
        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
            <Card className="text-center cardPlants">
              <Card.Img variant="bottom" src={plant1} className="cardPlantsImg" />
              <Card.Body>
                <Card.Text className="cardPlantsName">
                  {name}
                </Card.Text>
                <Card.Title className="cardPlantsPrice">${price}</Card.Title>
                <Card.Text className="cardPlantsTagline">
                 Envio gratis
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    );
}

export default cardPlant;