import React from 'react';
import Marquee from 'react-fast-marquee';


import amazon from '../../../assets/assets/brands/amazon.png';
import google from '../../../assets/assets/brands/amazon_vector.png';
import casio from '../../../assets/assets/brands/casio.png';
import moonstar from '../../../assets/assets/brands/moonstar.png';
import start from '../../../assets/assets/brands/start.png';
import randstad from '../../../assets/assets/brands/randstad.png';
import people from '../../../assets/assets/brands/start-people 1.png';

const logos = [amazon,google,  casio, moonstar, start, randstad, people];

const ClientLogo = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-black font-bold text-center mb-12">Trusted by Leading Brands</h2>
        
        <Marquee pauseOnHover speed={50} gradient={false}>
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-24 flex items-center">
              <img src={logo} alt={`Client Logo ${idx + 1}`} className="h-6 object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogo;