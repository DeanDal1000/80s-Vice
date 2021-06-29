import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { Card, Button, Container, Row, CardDeck } from 'react-bootstrap';
import dmc from '../img/dmc.jpg';

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
      </div>{' '}
      <div className="gallery">
        {/* <div class="card">
          <img src={dmc} />
          <h1>Back to the Future</h1>
          <p class="price">DMC Delorean</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <Link to="/delorean">
              {' '}
              <button>More Details</button>{' '}
            </Link>
          </p>
        </div>

        <Link to="/bat">
          <div class="card">
            <img src={dmc} />
            <h1>Batman </h1>
            <p class="price">The Bat Mobile</p>
            <p>
              Some text about the jeans. Super slim and comfy lorem ipsum lorem
              jeansum. Lorem jeamsun denim lorem jeansum.
            </p>
            <p>
              <button>Add to Cart</button>
            </p>
          </div>
        </Link>
        <div class="card">
          <img />
          <h1>Tailored Jeans</h1>
          <p class="price">$19.99</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <img />
          <h1>Tailored Jeans</h1>
          <p class="price">$19.99</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
        <div class="card">
          <img />
          <h1>Tailored Jeans</h1>
          <p class="price">$19.99</p>
          <p>
            Some text about the jeans. Super slim and comfy lorem ipsum lorem
            jeansum. Lorem jeamsun denim lorem jeansum.
          </p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div> */}
        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card">
              <img src={dmc} class="card-img-top" alt="dmc" />
              <div class="card-body">
                <h5 class="card-title">Back to the Future</h5>
                <p class="card-text">
                  DMC Delorean
                  <p>With its own time travelling capbitlies</p>
                </p>
                <Link to="/delorean">
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
