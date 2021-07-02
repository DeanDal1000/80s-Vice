import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link id="logo" to="/">
        <img src={logo} alt={logo} />
      </Link>
      <ul>
        <li>
          <Link to="/cars">Car Gallery</Link>
        </li>
        <li>
          <Link to="/cars">Bike Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
