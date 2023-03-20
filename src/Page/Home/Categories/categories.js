import React from 'react';
import { AiFillPicture } from 'react-icons/ai';
import { ImEmbed2 } from 'react-icons/im';
import { MdDesignServices } from 'react-icons/md';

export const Categories = () => {
  return (
    <>
      <div className="brand">
        <div className="icons">
          <AiFillPicture />
        </div>
        <div className="name">Brand Identity</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>
      <div className="ui">
        <div className="icons">
          <MdDesignServices />
        </div>
        <div className="name">UI/UX</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>
      <div className="develop">
        <div className="icons">
          <ImEmbed2 />
        </div>
        <div className="name">Development</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.</p>
      </div>
    </>
  );
};
