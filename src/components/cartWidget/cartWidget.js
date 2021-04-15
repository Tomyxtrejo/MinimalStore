import { Nav, Badge} from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';

export const CartWidget = () => {
    return(
        <Nav.Link href="#cart">
              <FiShoppingCart style={{ fontSize: '2rem', color: '#ffffff' }} />
              <Badge pill className="plantBGPrimary">
                1
              </Badge>{' '}
            </Nav.Link>
    )
}