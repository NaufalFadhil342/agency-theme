import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';

export const OurTeam = () => {
  return (
    <>
      <div className="person">
        <div className="desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="job">
          <i>
            <BsPersonCircle />
          </i>
          <div className="name">
            <p>Ashley Right</p>
            <div>Designer</div>
          </div>
        </div>
      </div>
      <div className="person">
        <div className="desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="job">
          <i>
            <BsPersonCircle />
          </i>
          <div className="name">
            <p>John Paul</p>
            <div>Developer</div>
          </div>
        </div>
      </div>
      <div className="person">
        <div className="desc">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
        </div>
        <div className="job">
          <i>
            <BsPersonCircle />
          </i>
          <div className="name">
            <p>Bill Jackson</p>
            <div>Marketeer</div>
          </div>
        </div>
      </div>
    </>
  );
};
