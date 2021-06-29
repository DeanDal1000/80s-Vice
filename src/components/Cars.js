import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Card, Button, Container, Row, CardDeck } from 'react-bootstrap';
import dmc from '../img/dmc.jpg';
import bat from '../img/bat1.jpg';

const Cars = () => {
  const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
  };
  const insideStyles = {
    padding: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  };
  const image1 =
    'https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';
  return (
    <div>
      <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax>{' '}
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
      <div className="gallery">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <img src={dmc} class="card-img-top" alt="dmc" />
              <div class="card-body">
                <h5 class="card-title">Back to the Future</h5>
                <p class="card-text">
                  DMC Delorean
                  <p>
                    The DeLorean time machine is a time travel device made by
                    retrofitting a DMC DeLorean vehicle with a flux capacitor.
                    Built in time travelling capabilities to go wherever you
                    want.
                  </p>
                </p>
                <Link to="/delorean">
                  <button type="button" class="btn btn-primary btn-lg">
                    More Details
                  </button>
                </Link>
                <button type="button" class="btn btn-secondary btn-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src={bat} class="card-img-top" alt="bat" />
              <div class="card-body">
                <h5 class="card-title">Batman</h5>
                <p class="card-text">
                  The Batmobile
                  <p>With its own crime fighting capbitlies</p>
                </p>
                <Link to="/bat">
                  <button type="button" class="btn btn-primary btn-lg">
                    Large button
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="..." class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
