import dmc from './img/dmc.jpg';
import dmc2 from './img/dmc2.jpg';

export const CarState = () => {
  return [
    {
      make: 'DMC DeLorean',
      mainImg: dmc,
      secImg: dmc2,
      url: '/delorean',
      detail: 'Beautiful Classic Time Traveller',
      seller: 'Dr Emmet Brown',
      location: '1640 Riverside Drive',
      city: 'Hill Valley',
      model: 'v8',
      price: '£50,000',
      year: '1985',
      previousOwner: '1',
      doors: '2 Gull-wing doors',
      fuel: 'plutonium',
      body: '2-door coupé',
      colour: 'Grey',
      desc: 'Hello',
    },
    {
      make: 'Bat Mobile',
      // mainImg: dmc,
      // secImg: dmc2,
      url: '/bat',
      model: 'v8',
      year: '1989',
      previousOwner: '1',
      doors: '1 sliding door',
      fuel: 'Jet Fuel',
      body: '2-door coupé',
      colour: 'black',
      description: [
        {
          info: 'Its the Bat Mobile!',
        },
      ],
    },
    {
      make: 'The Pursuit Special',
      // mainImg: dmc,
      // secImg: dmc2,
      url: '/mad',
      model: 'v8',
      year: '1982',
      previousOwner: '1',
      doors: '2 Doors',
      fuel: 'petrol',
      body: 'Interceptor',
      colour: 'black',
      description: [
        {
          info: 'My name is',
        },
      ],
    },
  ];
};

export default CarState;
