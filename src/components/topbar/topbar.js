import { useContext, useEffect, useState } from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap'
import { CartWidget } from '../cartWidget/cartWidget'
import { WishListWidget } from '../wishListWidget/wishListWidget'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../../context/cartContext'
import { getFirestore } from '../../firebase'
import logo from "../../assets/logo2.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import './topbar.css';

export const Topbar = () => {
  const { quantity } = useContext(CartContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const ItemCollection = db.collection('categories').orderBy('name')
    ItemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size !== 0) {
          const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          setCategories(data)
        }
      }
      )
  }, [])

  window.onscroll = () => {
    const nav = document.querySelector('#topbar');
    if (window.scrollY <= 0)
      nav.style = 'background-color:transparent;backdrop-filter: blur(0px)!important;';
    else
      nav.style = `background-color:rgba(255, 255, 255, ${(window.scrollY / window.innerHeight) * 3});box-shadow: -1px 1px 40px 3px rgba(231,231,231,0.6);border-bottom: solid rgba(0,0,0,0.05) 1px;backdrop-filter: blur(10px);`;
  }

  return (
    <header>
      <Navbar id="topbar" expand="sm" fixed="top">
        <div className="container">
          <Navbar.Brand>
            <Link to='/'>
              <Image src={logo} fluid className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {categories.map((cat) => (
                <NavLink to={`/category/${cat.name}`} className="linkCategory" activeClassName="linkCategoryActive" key={cat.name}>
                  <p key={cat.name}>{cat.name}</p>
                </NavLink>
              ))}
            </Nav>
            <WishListWidget />
            <CartWidget quantity={quantity} />
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header >
  )
}