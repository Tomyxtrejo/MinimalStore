import React from "react";
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../../App.css';
import './item.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = ({ id, name, price }) => {
  const images = require.context('../../../public/plants', true);
  let imgsrc = images(`./plant${id}_2.png`);
  return (
    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center" key={id}>
      <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>
      <Card className="text-center cardPlants">
        <Card.Img variant="bottom" src={imgsrc.default} className="cardPlantsImg" />
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
      </Link>
    </Col>
  );
}