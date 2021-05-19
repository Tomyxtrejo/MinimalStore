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
import { NotFound } from './views/notFound/notFound'

function App() {
  return (
    <div>
      <CartProvider>
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
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;

