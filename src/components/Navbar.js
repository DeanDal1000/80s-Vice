import React from 'react';
import { Link } from 'react-router-dom';

import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
  return (
    <div className="navbar">
      <Link id="logo" to="/">
        <h1>Motor</h1>
        {/* <div className="cart">
          <Link to="/cart">
            <FaShoppingCart />
          </Link>
        </div> */}
      </Link>
    </div>
  );
};

export default Navbar;
