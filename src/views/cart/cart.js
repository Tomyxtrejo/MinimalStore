import { Row } from 'react-bootstrap';
import './cart.css';
import { ButtonPlantr } from '../../components/buttonPlantr/buttonPlantr';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'

export const Cart = () => {
    return (
        <Row style={{ padding: '5rem 0 20rem 0', flexDirection: 'column' }}>
            <h4 style={{ marginBottom: '2rem' }}>El carrito esta vacio</h4>
            <div style={{ width: '20%' }}>
                <Link to='/'>
                    <ButtonPlantr style={{}}><AiOutlineHome /> Ir de compras</ButtonPlantr>
                </Link>
            </div>
        </Row>
    )
}