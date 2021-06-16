import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/cars">Vehicle Gallery</Link>
          </li>
          <li>
            <a href="">Used Cars</a>
          </li>
          <li>
            <a href="">New Cars</a>
          </li>
          <li>
            <a href="">Value your Car</a>
          </li>
          <li>
            <a href="">Review Vehicle </a>
          </li>
          <li>
            <a href="">Insurance </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="welcome">
          <p>
            Welcome to 80s Motor, where you can browse and buy cars from 80s
            movies. You can see all details about cars if selected upon. Below
            is a list of all the cars that this site has to offer, we have a
            wide variety of cards from the DeLorean to the Bat mobile. Have fun
            and drive safe. Check out our premium plans to stay in the loop for
            the next cars that will arrive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
