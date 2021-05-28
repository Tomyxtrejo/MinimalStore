import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './views/home/home'
import { ItemDetailContainer } from './views/itemDetailContainer/itemDetailContainer';
import { Cart } from './views/cart/cart';
import { Orders } from './views/orders/orders';
import { ItemListContainer } from './components/itemListContainer/itemListContainer';
import { ScrollToTop } from './components/scrollToTop/scrollToTop';
import { Topbar } from './components/topbar/topbar';
import { Footer } from './components/footer/footer';
import { CartProvider } from './context/cartContext';
import { WishListProvider } from './context/wishListContext';
import { Notice } from './components/notice/notice'

function App() {
  document.title = "Plantr: Tu tienda de plantas";
  return (
    <div>
      <CartProvider>
        <WishListProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Topbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route exact path='/item/:id'>
                <ItemDetailContainer />
              </Route>
              <Route exact path='/category/:category'>
                <ItemListContainer />
              </Route>
              <Route exact path='/cart'>
                <Cart />
              </Route>
              <Route exact path='/orders/:orderId'>
                <Orders />
              </Route>
              <Route exact path='/orders'>
                <Orders />
              </Route>
              <Route>
                <Notice header="Parece que no hay nada por aca" buttons={[{ text: 'Volver al inicio', link: '/' }]} />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </WishListProvider>
      </CartProvider>
    </div>
  )
}

export default App;

