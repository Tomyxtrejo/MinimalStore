import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './views/home/home'
import { PlantDetailContainer } from './views/plantDetailContainer/plantDetailContainer';
import { PlantsListContainer } from './components/plantsListContainer/plantsListContainer';

import { Topbar } from './components/topbar/topbar';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <BrowserRouter>
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
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App;

