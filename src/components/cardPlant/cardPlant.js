import React from "react";
import { Col, Card } from 'react-bootstrap';
import { ItemCounter } from '../itemCounter/itemCounter'
import { Link } from 'react-router-dom'
import '../../App.css';
import './cardPlant.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardPlant = ({ id, name, description, price, stock, img }) => {
  const images = require.context('../../../public/plants', true);
  let imgsrc = images(`./plant${img}_2.png`);
  //console.log(imgsrc.default);
  return (
    <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
      <Link to={`/item/${id}`} style={{textDecoration: 'none'}}>
      <Card className="text-center cardPlants">
        <Card.Img variant="bottom" src={imgsrc.default} className="cardPlantsImg" />
        <Card.Body>
          <Card.Text className="cardPlantsName">
            {name}
          </Card.Text>
          <Card.Title className="cardPlantsPrice">${price}</Card.Title>
          {/*<Card.Text className="cardPlantsTagline">
            Envio gratis
                </Card.Text>
  */}

        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
}