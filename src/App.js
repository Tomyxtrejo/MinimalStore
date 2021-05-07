import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './views/home/home'
import { PlantDetailContainer } from './views/plantDetailContainer/plantDetailContainer';
import { Cart } from './views/cart/cart';
import { PlantsListContainer } from './components/plantsListContainer/plantsListContainer';
import { ScrollToTop } from './components/scrollToTop/scrollToTop';
import { Topbar } from './components/topbar/topbar';
import { Footer } from './components/footer/footer';
import { CartProvider } from './context/cartContext';

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
              <PlantDetailContainer />
            </Route>
            <Route exact path='/category/:category'>
              <PlantsListContainer />
            </Route>
            <Route exact path='/cart'>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;

