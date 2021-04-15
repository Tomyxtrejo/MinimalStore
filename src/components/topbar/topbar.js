import { Nav, Navbar, Image } from 'react-bootstrap';
import { CartWidget } from '../cartWidget/cartWidget';
import logo from "../../assets/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Topbar = () => {
  return(
    <header>
      <Navbar bg="none" expand="sm" fixed="top" style={{ backgroundColor: '#e7e7e7' }}>
        <div className="container">
          <Navbar.Brand href="#home">
            <Image src={logo} fluid style={{ width: '15rem' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#trends">Tendencias</Nav.Link>
              <Nav.Link href="#new">Novedades</Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </div>
      </Navbar>
      </header>
  )
}