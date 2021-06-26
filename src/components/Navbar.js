import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="navbar">
      <a id="logo" to="/">
        <h1>Motor</h1>
        {/* <div className="cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div> */}
      </a>
    </div>
  );
};

export default Navbar;
