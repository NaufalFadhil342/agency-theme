import React from 'react';
import portfolio1 from '../../../Assets/portfolio1.jpg';
import portfolio2 from '../../../Assets/portfolio2.jpg';
import portfolio3 from '../../../Assets/portfolio3.jpg';
import decoration1 from '../../../Assets/decoration1.jpg';
import decoration2 from '../../../Assets/decoration2.jpg';

export const Content = () => {
  return (
    <>
      <div className="left">
        <div className="portfolio">
          <div className="image" style={{ backgroundImage: `url(${portfolio1})` }} />
          <div>
            <div className="identity">Your Identity</div>
            <h2>Pattern Exploration</h2>
          </div>
        </div>
        <div className="portfolio">
          <div className="image" style={{ backgroundImage: `url(${portfolio2})` }} />
          <div>
            <div className="identity">Your Identity</div>
            <h2>Pattern Exploration</h2>
          </div>
        </div>
        <div className="portfolio">
          <div className="image" style={{ backgroundImage: `url(${decoration1})` }} />
          <div>
            <div className="identity">Your Identity</div>
            <h2>Pattern Exploration</h2>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="portfolio">
          <div className="decoration" style={{ backgroundImage: `url(${portfolio3})` }} />
          <div>
            <div className="identity">Your Identity</div>
            <h2>Pattern Exploration</h2>
          </div>
        </div>
        <div className="portfolio">
          <div className="image" style={{ backgroundImage: `url(${decoration2})` }} />
          <div>
            <div className="identity">Your Identity</div>
            <h2>Pattern Exploration</h2>
          </div>
        </div>
      </div>
    </>
  );
};
