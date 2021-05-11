import React from 'react';
import { Container, Row } from 'react-bootstrap'
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr'
import { Link } from 'react-router-dom';
import { IoLeaf } from 'react-icons/io5'
import slide from "../../assets/slide.jpg";
export const NotFound = () => {
    return (
        <div style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'center' }}>
            <Container>
                <Row style={{ padding: '20rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <h4 style={{ marginBottom: '2rem' }}>Parece que no hay nada por aca</h4>
                    <div style={{ width: '20%' }}>
                        <Link to='/'>
                            <ButtonPlantr style={{}}><IoLeaf /> Volver al inicio</ButtonPlantr>
                        </Link>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
