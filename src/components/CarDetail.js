import React, { useState, useEffect } from 'react';
import { CarState } from '../carState';
import { useHistory } from 'react-router-dom';
import { Tabs, Tab } from 'react-bootstrap';

const CarDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [cars, setCars] = useState(CarState);
  const [car, setCar] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentCar = cars.filter((stateCar) => stateCar.url === url);
    setCar(currentCar[0]);
    console.log(setCar);
  }, [cars, url]);

  return (
    <>
      {car && (
        <div>
          <div class="car-details">
            <h1>
              {car.make} ({car.year})
            </h1>
            <h4>{car.detail}</h4>
            <img src={car.mainImg} />
            <hr />
            <div className="seller">
              <h3>Motor Garages</h3>
              <p>{car.seller}</p>
              <p>{car.location}</p>
              <p>{car.city}</p>
              <button>Contact Seller</button>
            </div>
            <div className="vehicle-data">
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Vehicle Data">
                  <table>
                    <tr>
                      <td>Make</td>
                      <td>{car.make}</td>
                      <td>Year</td>
                      <td>{car.year}</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td>{car.model}</td>
                      <td>Previous Owner's</td>
                      <td>{car.previousOwner}</td>
                    </tr>
                    <tr>
                      <td>Body</td>
                      <td>{car.body}</td>
                      <td>Colour</td>
                      <td>{car.colour}</td>
                    </tr>
                    <tr>
                      <td>Fuel</td>
                      <td>{car.fuel}</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <td>Cleveland</td>
                      <td>Brown</td>
                      <td>$250</td>
                    </tr>
                  </table>
                </Tab>
                <Tab eventKey="profile" title="Description">
                  {car.desc}
                </Tab>
                <Tab eventKey="contact" title="Condition"></Tab>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetail;
