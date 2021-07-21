import dmc from './img/dmc.jpg';
import dmc2 from './img/dmc2.jpg';
import bat1 from './img/bat1.jpg';
import mad1 from './img/mad1.jpg';
import knight1 from './img/knight1.jpg';

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
      desc: 'The DeLorean time machine is a time travel device made by retrofitting a DMC DeLorean vehicle with a flux capacitor. The car requires 1.21 gigawatts of power and needs to travel 88 miles per hour to initiate time travel. ',
    },
    {
      make: 'Bat Mobile',
      mainImg: bat1,
      secImg: dmc2,
      url: '/bat',
      city: 'Gotham',
      location: 'Batcave',
      model: 'v8',
      seller: 'Alfred Pennyworth',
      detail: 'Built to absorb and redistribute the shock of any impact.',
      year: '1989',
      previousOwner: '1',
      doors: '1 sliding door',
      fuel: 'Jet Fuel',
      body: 'Sport',
      colour: 'black',
      desc: 'Housed in the Batcave, which it accesses through a hidden entrance, the Batmobile is both a heavily armored tactical assault vehicle and a personalized custom-built pursuit and capture vehicle that is used by Batman in his fight against crime.',
    },
    {
      make: 'The Pursuit Special',
      mainImg: mad1,
      secImg: dmc2,
      url: '/mad',
      city: 'Melbourne, Victoria',
      location: 'Desert',
      model: 'v8',
      detail: 'Black on Black',
      seller: 'Max Rockatansky',
      year: '1982',
      previousOwner: '1',
      doors: '2 Doors',
      fuel: 'petrol',
      body: 'Interceptor',
      colour: 'black',
      desc: 'The Pursuit Special, also referred to as the Last of the V8 Interceptors, is the iconic black GT Falcon muscle car featuring a distinctive supercharger ',
    },
    {
      make: 'Knight Rider',
      mainImg: knight1,
      secImg: dmc2,
      url: '/knight',
      city: 'Melbourne, Victoria',
      location: 'Desert',
      model: 'v8',
      detail: 'K.I.T.T',
      seller: 'Michael Knight',
      year: '1982',
      previousOwner: '1',
      doors: '2 Doors',
      fuel: 'petrol',
      body: 'Interceptor',
      colour: 'black',
      desc: 'The Pursuit Special, also referred to as the Last of the V8 Interceptors, is the iconic black GT Falcon muscle car featuring a distinctive supercharger ',
    },
    {
      make: 'Christine',
      mainImg: knight1,
      secImg: dmc2,
      url: '/christine',
      city: 'Melbourne, Victoria',
      location: 'Desert',
      model: 'v8',
      detail: 'K.I.T.T',
      seller: 'Michael Knight',
      year: '1982',
      previousOwner: '1',
      doors: '2 Doors',
      fuel: 'petrol',
      body: 'Interceptor',
      colour: 'black',
      desc: 'The Pursuit Special, also referred to as the Last of the V8 Interceptors, is the iconic black GT Falcon muscle car featuring a distinctive supercharger ',
    },
  ];
};

export default CarState;
