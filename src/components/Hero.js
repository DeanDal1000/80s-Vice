import React from 'react';
import { Parallax } from 'react-parallax';
import Main from './Main';
import Layout from './Layout';

const Hero = () => {
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
      {/* <Parallax bgImage={image1} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}></div>
        </div>
      </Parallax> */}
      <Main />
      <Layout />
    </div>
  );
};

export default Hero;
