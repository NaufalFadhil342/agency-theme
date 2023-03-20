import React from 'react';
import image from '../../../Assets/bootcamp.jpg';

export const Desc = () => {
  return (
    <>
      <div className="identity">
        <div className="image">
          <div style={{ backgroundImage: `url(${image})` }} />
        </div>
        <div className="content">
          <div className="tagline">Your Identity</div>
          <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="actions">Learn More</button>
        </div>
      </div>
    </>
  );
};
