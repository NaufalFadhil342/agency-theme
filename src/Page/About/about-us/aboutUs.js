import React from 'react';
import aboutUs from '../../../Assets/portfolio3.jpg';

export const AboutUs = () => {
  return (
    <>
      <div className="content">
        <div className="tagline">About Us</div>
        <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis, felis at feugiat fermentum, lorem ipsum cursus tellus, et consequat diam orci ac lectus. Nulla sit amet vehicula justo.</p>
        <p>Praesent pharetra orci id faucibus sodales. Fusce ac turpis quis tortor facilisis volutpat. Phasellus eu ex eu metus eleifend consectetur. Curabitur suscipit vel nisl vel consectetur.</p>
      </div>
      <div className="image">
        <div style={{ backgroundImage: `url(${aboutUs})` }} />
      </div>
    </>
  );
};
