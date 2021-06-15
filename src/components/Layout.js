import React from 'react';
import Carousel from './Carousel';

const Layout = () => {
  return (
    <div>
      <div className="layout-container">
        <div class="frontpage">
          <div class="fp-cell fp-cell--1">
            <div class="fp-item">1</div>
          </div>
          <div class="fp-cell fp-cell--2">
            <div class="fp-item">2</div>
          </div>
          <div class="fp-cell fp-cell--3">
            <div class="fp-item">3</div>
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
