import { Form, Col, Row } from 'react-bootstrap'
import { Fragment, useState } from 'react'
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoCardOutline } from 'react-icons/io5'


export const FormCheckout = ({ onConfirmBuy }) => {
    const [clicked, setClicked] = useState(false)
    const [emptyFields, setEmptyFields] = useState(false)
    const isEmpty = (obj) => {
        return Object.values(obj).some(x => x === '')
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target),
            formDataObj = Object.fromEntries(formData.entries())
        if (isEmpty(formDataObj)) {
            setEmptyFields(true)
        } else {
            setClicked(true)
            onConfirmBuy(formDataObj)
        }
    };

    return (
        <Fragment>
            <Row style={{ borderBottom: '1px rgba(0,0,0,0.1) solid', padding: '1rem 0', marginBottom: '2rem' }}>
                <Col xs={2}>
                    <IoCardOutline style={{ fontSize: '4rem', color: '#3dcc62' }} />
                </Col>
                <Col xs={4}>
                    <Form.Label>Numero de tarjeta</Form.Label>
                    <p style={{ color: '#3dcc62' }}>45** **** **** 1803</p>
                </Col>
                <Col xs={4}>
                    <Form.Label>Fecha vencimiento</Form.Label>
                    <p style={{ color: '#3dcc62' }}>02/27</p>
                </Col>
                <Col xs={2}>
                    <Form.Label>CVV</Form.Label>
                    <p style={{ color: '#3dcc62' }}>884</p>
                </Col>
            </Row>
            <Form onSubmit={onFormSubmit}>
                <Form.Row style={{ marginBottom: '2rem' }}>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Nombre completo</Form.Label>
                        <Form.Control type="text" placeholder="Nombre y Apellido" name="name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress2">
                        <Form.Label>Correo electronico</Form.Label>
                        <Form.Control type="email" placeholder="tucorreo@gmail.com" name="mail" />
                    </Form.Group>
                    <Form.Group controlId="formGridCity">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="number" placeholder="Numero de telefono" name="phone" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridAddress1">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" placeholder="Calle falsa 123" name="address" />
                    </Form.Group>
                </Form.Row>
                {emptyFields && <p style={{ color: 'red' }}>Completa todos los campos</p>}
                {clicked ?
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', flexDirection: 'column' }}>
                        <AiOutlineLoading3Quarters className="loader" />
                    </Row>
                    :
                    <ButtonPlantr type="submit">Comprar</ButtonPlantr>
                }
            </Form>
        </Fragment>
    )
}