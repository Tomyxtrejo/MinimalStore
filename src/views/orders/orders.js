import { Row, Container, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './orders.css';
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr';
import { useState, useEffect } from 'react'
import { getFirestore } from '../../firebase'
import slide from "../../assets/slide.jpg";
import { useParams } from 'react-router-dom'
import { useHistory } from "react-router-dom";

export const Orders = () => {
    let history = useHistory();
    const { orderId } = useParams()
    const [order, setOrder] = useState('')
    const [existOrder, setExistOrder] = useState(true)

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (e.target[0].value.length < 1) {
        } else {
            history.push(`/orders/${e.target[0].value}`)
        }
    };

    useEffect(() => {
        if (orderId) {
            const db = getFirestore()
            const ItemCollection = db.collection('orders').doc(orderId)
            ItemCollection
                .get()
                .then((querySnapshot) => {
                    if (querySnapshot.exists === true) {
                        setOrder(querySnapshot.data())
                        setExistOrder(true)
                    } else {
                        setExistOrder(false)
                    }
                }
                )
        }
    }, [orderId])
    return (
        <div style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'center' }}>
            <Container>
                {order ?
                    <Row style={{ padding: '10rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                        <div className="topCart">
                            <h5 style={{ marginBottom: '2rem' }}>Codigo de referencia: {orderId}</h5>
                            <h5>Fecha de ingreso: {new Date(order.date.seconds * 1000).toLocaleDateString("es-AR")}</h5>
                        </div>
                        <h4 style={{ marginBottom: '2rem', color: 'rgb(61 204 98)' }}>Estado: En deposito</h4>
                        <Table responsive style={{ backgroundColor: 'white', borderRadius: '3rem', boxShadow: 'inset 0 0 0 5px #3dcc62' }}>
                            <tbody>
                                {order.items.map((item) => (
                                    <tr key={item.item.id} style={{ margin: '0rem 1rem', borderBottom: '1px solid #dee2e6' }}>
                                        <td><img src={require(`../../assets/plants/plant${item.item.foto}_2.png`).default} className="listImage" alt={`item-${item.id}`} /></td>
                                        <td><h5>x {item.quantity}</h5></td>
                                        <td><h5>{item.item.name.substring(0, 20)}</h5></td>
                                        <td><h5>${item.item.price * item.quantity}</h5></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="bottomCart">
                            <h2 className="total">Total: ${order.total}</h2>
                        </div>
                    </Row> :
                    <Row style={{ padding: '20rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Form onSubmit={onFormSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <h5>Codigo de Referencia</h5>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" name="code" size="lg" />
                            </Form.Group>
                            <p style={{ color: 'red' }}>{existOrder === false && 'El pedido que buscas no existe'}</p>
                            <ButtonPlantr type="submit">
                                Consultar pedido
                            </ButtonPlantr>
                        </Form>
                    </Row>
                }
            </Container>
        </div>
    )
}

