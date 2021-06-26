import React from 'react';
import { Link } from 'react-router-dom';

const Cars = () => {
  return (
    <div>
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
