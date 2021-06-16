import './style.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Cars from './components/Cars';

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
      </Switch>
    </div>
  );
}

export default App;
