import { Row, Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css';
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr';
import { IoTrashOutline, IoCardOutline } from 'react-icons/io5'
import { CartContext } from '../../context/cartContext'
import { useContext, useState, Fragment } from 'react'
import { FormCheckout } from '../../components/formCheckout/formCheckout'
import { Notice } from '../../components/notice/notice'
import { ItemsTable } from '../../components/itemsTable/itemsTable'

export const Cart = () => {
    const { cartItems, quantity, total, removeItem, clearCart, sendOrder, orderId, orderSummary, changeItemQuantity } = useContext(CartContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    if (cartItems.length) {
        return (
            <Fragment>
                <div className="cartContainer">
                    <Container>
                        <Row className="cartTableContainer">
                            <div className="topCart">
                                <h4 className="cartQuantityText">Carrito( {quantity} )</h4>
                                <p className="cleanCart" onClick={() => clearCart()}>Vaciar carrito <IoTrashOutline /> </p>
                            </div>
                            <ItemsTable items={cartItems} onAdd={changeItemQuantity} controllable={true} onRemove={removeItem} />
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
                    <Modal.Body className="formModal">
                        <FormCheckout onConfirmBuy={sendOrder} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    } else {
        return (
            <div className="cartContainer">
                <Container>
                    <Row className="emptyCartContainer">
                        {orderId === '' ?
                            <Notice bg={false} header="El carrito está vacio" buttons={[{ text: 'Ir de compras', link: '/' }]} />
                            :
                            <Fragment>
                                <Notice bg={false} buttons={[{ text: 'Consultar estado', link: `/orders/${orderId}`, icon: 'shipping' }, { text: 'Volver al inicio', link: '/', type: 'link' }]}>
                                    <h1>Gracias por comprar en Plantr</h1>
                                    <div className="purchasedContainer">
                                        <h5 className="buyerName">{orderSummary.buyer.name.split(" ")[0]}‎‏‏‎, ‎</h5>
                                        <h5>tu codigo de referencia es:</h5>
                                    </div>
                                    <h5 className="orderIdText">{orderId}</h5>
                                    <p>Revisa tu correo, te hemos enviado los pasos a seguir a {orderSummary.buyer.mail}</p>
                                </Notice>
                            </Fragment>
                        }
                    </Row>
                </Container>
            </div>
        )
    }
}