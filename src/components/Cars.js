import React from 'react';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';

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
        <Link to="/delorean">
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
        </Link>
        <Link to="/bat">
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
        </div>
      </div>
    </div>
  );
};

export default Cars;
