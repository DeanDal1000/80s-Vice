import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Carousel = () => {
  const items = [
    <div className="item" data-value="1">
      1
    </div>,
    <div className="item" data-value="2">
      2
    </div>,
    <div className="item" data-value="3">
      3
    </div>,
    <div className="item" data-value="4">
      4
    </div>,
    <div className="item" data-value="5">
      5
    </div>,
  ];
  const TileStyles = {
    display: 'inline-block',
    width: 200,
    height: 200,
    border: '2px solid #fff',
    background: 'teal',
  };
  return (
    <div>
      <AliceCarousel items={items} style={TileStyles} />
    </div>
  );
};

export default Carousel;
