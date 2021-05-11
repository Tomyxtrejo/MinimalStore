import { Badge } from 'react-bootstrap';
import { Fragment } from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

export const CartWidget = ({ quantity }) => {
    return (
      <Fragment>
        { quantity > 0 &&
          <Link to="/cart">
            <FiShoppingCart style={{ fontSize: '2rem', color: '#1b1b1b' }} />
            <Badge pill className="plantBGPrimary">
              {quantity}
            </Badge>{' '}
          </Link>
        }
      </Fragment>
    )
}