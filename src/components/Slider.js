import React from 'react';
// import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'react-bootstrap';
import Knight from '../img/knight.jpg';
import Bat from '../img/bat1.jpg';
import Mad from '../img/mad.jpg';

const Slider = () => {
  return (
    <>
      <Carousel fade className="carousel">
        <Carousel.Item className="carousel-item">
          <img className="d-block w-100" src={Knight} alt="First slide" />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Bat} alt="Second slide" />

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Mad} alt="Third slide" />

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
