import React from 'react';
import teamwork from '../../../Assets/teamwork.jpg';
import bootcamp from '../../../Assets/bootcamp.jpg';

export const Identity = () => {
  return (
    <>
      <div className="first">
        <div className="image">
          <div style={{ backgroundImage: `url(${teamwork})` }} />
        </div>
        <div className="content">
          <div>Your Identity</div>
          <h1>Amet minim mollit non deserunt</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="cta">Learn More</button>
        </div>
      </div>
      <div className="second">
        <div className="image">
          <div style={{ backgroundImage: `url(${bootcamp})` }} />
        </div>
        <div className="content">
          <div>Your Identity</div>
          <h1>Amet minim mollit non deserunt</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          <button className="cta">Learn More</button>
        </div>
      </div>
    </>
  );
};
