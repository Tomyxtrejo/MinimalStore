import { Row, Container, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css';
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr';
import { ItemCounter } from '../../components/itemCounter/itemCounter';
import { Link } from 'react-router-dom'
import { IoTrashOutline, IoCloseCircleOutline, IoCardOutline, IoLeaf } from 'react-icons/io5'
import { RiTruckFill } from 'react-icons/ri'
import { CartContext } from '../../context/cartContext'
import { useContext, useState, Fragment } from 'react'
import { FormCheckout } from '../../components/formCheckout/formCheckout'
import slide from "../../assets/slide.jpg";

export const Cart = () => {
    const { cartItems, setCartItems, quantity, total, removeItem, clearCart, sendOrder, orderId, orderSummary } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleOnAdd = (e, id) => {
        let itemsUpdated = [...cartItems]
        itemsUpdated.map(function (item, i) {
            if (item.item.id === id) {
                if (item.quantity !== item.item.stock) {
                    if (item.quantity !== 1) {
                        itemsUpdated[i].quantity = item.quantity + e
                    } else {
                        if (e === 1) {
                            itemsUpdated[i].quantity = item.quantity + e
                        }
                    }
                } else {
                    if (item.quantity !== 1) {
                        if (e === -1) {
                            itemsUpdated[i].quantity = item.quantity + e
                        }
                    }
                }
            }
        })
        setCartItems(itemsUpdated)
    }
    if (cartItems.length) {
        return (
            <Fragment>
                <div style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'center' }}>
                    <Container>
                        <Row style={{ padding: '10rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
                            <div className="topCart">
                                <h4 style={{ marginBottom: '2rem' }}>Carrito( {quantity} )</h4>
                                <p className="cleanCart" onClick={() => clearCart()}>Vaciar carrito <IoTrashOutline /> </p>
                            </div>
                            <Table responsive style={{ backgroundColor: 'white', borderRadius: '3rem', boxShadow: 'inset 0 0 0 5px #3dcc62' }}>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.item.id} style={{ margin: '0rem 1rem', borderBottom: '1px solid #dee2e6' }}>
                                            <td><img src={require(`../../assets/plants/plant${item.item.foto}_2.png`).default} className="listImage" alt={`item-${item.id}`} /></td>
                                            <td>
                                                <ItemCounter quantity={item.quantity} onAdd={(e) => handleOnAdd(e, item.item.id)} />
                                            </td>
                                            <td><h5>{item.item.name.substring(0, 20)}</h5></td>
                                            <td><h5>${item.item.price * item.quantity}</h5></td>
                                            <td className="removeSpan">
                                                <p onClick={() => removeItem(item.item.id)} className="remove"><IoCloseCircleOutline /></p>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div className="bottomCart">
                                <h2 className="total">Total: $ {total}</h2>
                                <div onClick={handleShow}>
                                    <ButtonPlantr><IoCardOutline /> Proceder al pago</ButtonPlantr>
                                </div>
                            </div>
                        </Row>
                    </Container>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Terminar compra
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ padding: '4rem' }}>
                        <FormCheckout onConfirmBuy={sendOrder} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    } else {
        return (
            <div style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'center' }}>
                <Container>
                    <Row style={{ padding: '20rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        {orderId === '' ?
                            <Fragment>
                                <h4 style={{ marginBottom: '2rem' }}>Es carrito está vacio</h4>
                                <div style={{ width: '20%' }}>
                                    <Link to='/'>
                                        <ButtonPlantr style={{}}><IoLeaf /> Ir de compras</ButtonPlantr>
                                    </Link>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <h1>Gracias por comprar en Plantr</h1>
                                <div style={{ display: 'flex' }}>
                                    <h5 style={{ textTransform: 'capitalize' }}>{orderSummary.buyer.name.split(" ")[0]}‎‏‏‎, ‎</h5>
                                    <h5>tu codigo de referencia es:</h5>
                                </div>
                                <h5 style={{ color: '#3dcc62' }}>{orderId}</h5>
                                <p>Revisa tu correo, te hemos enviado los pasos a seguir a {orderSummary.buyer.mail}</p>
                                <div style={{ width: '20%', marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Link to={`/orders/${orderId}`}>
                                        <ButtonPlantr style={{ marginBottom: '3rem' }}><RiTruckFill /> Consultar estado</ButtonPlantr>
                                    </Link>
                                    <Link to='/'>
                                        <p style={{ marginTop: '1rem' }}>Volver al inicio</p>
                                    </Link>
                                </div>
                            </Fragment>
                        }
                    </Row>
                </Container>
            </div>
        )
    }

}