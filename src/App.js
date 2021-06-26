import './style.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cart from './components/Cart';
import Cars from './components/Cars';
import CarDetail from './components/CarDetail';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Hero}>
          <Hero />
        </Route>
        <Route exact path="/cars" component={Cars}>
          <Cars />
        </Route>
        <Route to="/:id">
          <CarDetail />
        </Route>
        <Route exact path="/cart" component={Cart}>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
