import React from 'react';
import retro from '../img/retro3.png';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="about">
      <img src={retro} alt={retro} />
      {/* <Container className="about-container">
        <Row md={3}>
          <Col>1 of 3</Col>
          <Col xs={6}>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container> */}
      <div className="container-fluid padding">
        <div className="row text-center padding mt-5">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-car"></i>
            <h4>Cars</h4>
            <p>Enjoy Cars</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-motorcycle"></i>
            <h4>MotorBikes</h4>
            <p>Enjoy Cars</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <i class="fas fa-car-crash"></i>
            <h4>Insurance</h4>
            <p>Enjoy Cars</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
