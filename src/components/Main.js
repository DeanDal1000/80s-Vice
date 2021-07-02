import React from 'react';
import { Link } from 'react-router-dom';
import Knight from '../img/knight.jpg';
import Bat from '../img/bat.jpg';
import Mad from '../img/mad.jpg';
import retro from '../img/retro.png';
import retro2 from '../img/retro2.png';

const Main = () => {
  return (
    <div>
      {/* <div className="menu">
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
      </div> */}
      <div className="container">
        <div className="welcome">
          <img src={retro} alt={retro} />
          <p>80's Movie Vehicles</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
