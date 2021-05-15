import { Row, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './cart.css';
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr';
import { Link } from 'react-router-dom'
import { IoTrashOutline, IoCloseCircleOutline, IoCardOutline, IoLeaf } from 'react-icons/io5'
import { CartContext } from '../../context/cartContext'
import { useContext } from 'react'
import slide from "../../assets/slide.jpg";

export const Cart = () => {
    const { cartItems, quantity, total, removeItem, clearCart } = useContext(CartContext)
    if (cartItems.length) {
        return (
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
                                    <tr key={item.id} style={{ margin: '0rem 1rem', borderBottom: '1px solid #dee2e6' }}>
                                        <td><img src={require(`../../assets/plants/plant${item.item.foto}_2.png`).default} className="listImage" alt={`item-${item.id}`} /></td>
                                        <td><h5>x {item.quantity}</h5></td>
                                        <td><h5>{item.item.name.substring(0, 20)}</h5></td>
                                        <td><h5>${item.item.price * item.quantity}</h5></td>
                                        <td className="removeSpan">
                                            <p onClick={() => removeItem(item.id)} className="remove"><IoCloseCircleOutline /></p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <div className="bottomCart">
                            <h2 className="total">Total: $ {total}</h2>
                            <Link to='/' className="checkout" onClick={() => clearCart()}>
                                <ButtonPlantr><IoCardOutline /> Proceder al pago</ButtonPlantr>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    } else {
        return (
            <div style={{ backgroundImage: `url(${slide})`, backgroundSize: 'cover', backgroundAttachment: 'center' }}>
                <Container>
                    <Row style={{ padding: '20rem 0 25rem 0', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h4 style={{ marginBottom: '2rem' }}>Es carrito está vacio</h4>
                        <div style={{ width: '20%' }}>
                            <Link to='/'>
                                <ButtonPlantr style={{}}><IoLeaf /> Ir de compras</ButtonPlantr>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }

}