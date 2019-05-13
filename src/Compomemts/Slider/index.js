import React from 'react';
import Carousel from './Carousel';
import Timer from './Timer';
const Slider = () => {
  return (
    <div style={{position:'relative'}}>
    <Carousel />
      <div className="event_name">
        <div className="wrapper">
          React Meetting
        </div>
      </div>
      <Timer/>
    </div>
  );
};

export default Slider;