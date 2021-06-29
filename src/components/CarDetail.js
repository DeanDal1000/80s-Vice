import React, { useState, useEffect } from 'react';
import { CarState } from '../carState';
import { useHistory } from 'react-router-dom';

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
            <div className="seller">{car.seller}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CarDetail;
