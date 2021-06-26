import React from 'react';
import Knight from '../img/knight.jpg';
import Bat from '../img/bat.jpg';
import Mad from '../img/mad.jpg';

const Layout = () => {
  return (
    <div>
      <div className="layout-container">
        <div class="frontpage">
          <div class="fp-cell fp-cell--1">
            <div class="fp-item">
              <img src={Knight} id="ad1" />
            </div>
          </div>
          <div class="fp-cell fp-cell--2">
            <div class="fp-item">
              <img src={Bat} id="ad2" />
            </div>
          </div>
          <div class="fp-cell fp-cell--3">
            <div class="fp-item">
              <img src={Mad} id="ad3" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="ads">Featured Ads</div>

      {/* <Carousel /> */}
    </div>
  );
};

export default Layout;
