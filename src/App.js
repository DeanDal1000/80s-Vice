import './style.scss';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Main from './components/Main';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Layout />
    </div>
  );
}

export default App;
