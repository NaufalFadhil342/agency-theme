import React from 'react';
import ourworkImg from '../../../Assets/developer.jpg';

export const Ourwork = () => {
  return (
    <>
      <div className="image">
        <div style={{ backgroundImage: `url(${ourworkImg})` }} />
      </div>
      <div className="content">
        <h1>Our work Process</h1>
        <div className="ourworkProcess">
          <div>
            <span>01</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis, felis at feugiat fermentum.</p>
          </div>
          <div>
            <span>02</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis, felis at feugiat fermentum.</p>
          </div>
          <div>
            <span>03</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis, felis at feugiat fermentum.</p>
          </div>
        </div>
      </div>
    </>
  );
};
