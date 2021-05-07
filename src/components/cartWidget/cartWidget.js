import { Nav, Badge} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CartWidget = ({quantity}) => {
    return(
        <Nav.Link href="#cart">
              <FiShoppingCart style={{ fontSize: '2rem', color: '#1b1b1b' }} />
              <Badge pill className="plantBGPrimary">
                {quantity}
              </Badge>{' '}
            </Nav.Link>
    )
}