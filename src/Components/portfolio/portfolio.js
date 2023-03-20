import React from 'react';
import { useNavigate } from 'react-router-dom';
import portfolio1 from '../../Assets/portfolio1.jpg';
import portfolio2 from '../../Assets/portfolio2.jpg';
import portfolio3 from '../../Assets/portfolio3.jpg';

export const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="headline">
        <h1>Our portfolio</h1>
        <button className="view" onClick={() => navigate('/portfolio')}>
          View Portfolio
        </button>
      </div>
      <div className="portList">
        <div className="left">
          <div style={{ backgroundImage: `url(${portfolio1})` }} />
          <div style={{ backgroundImage: `url(${portfolio2})` }} />
        </div>
        <div className="right">
          <div style={{ backgroundImage: `url(${portfolio3})` }} />
        </div>
      </div>
      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <button className="hiddenBottom" onClick={() => navigate('/portfolio')}>
          View Portfolio
        </button>
      </div>
    </>
  );
};
