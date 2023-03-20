import React from 'react';
import image from '../../../Assets/portfolio2.jpg';
import { AiFillPicture } from 'react-icons/ai';

export const Benefit = () => {
  return (
    <>
      <div className="headline">
        <div className="tagline">Your Identity</div>
        <h1>Nam felis diam, sagittis id velit sit amet aliquam faucibus nisi Sed pretium est sed sollicitudin condimentum</h1>
      </div>
      <div className="content">
        <div className="left">
          <div style={{ backgroundImage: `url(${image})` }} />
        </div>
        <div className="right">
          <div className="profit">
            <div className="icon">
              <span>
                <AiFillPicture />
              </span>
              <h3>Brand identity</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis diam aliquam faucibus nisi. </p>
          </div>
          <br />
          <div className="profit">
            <div className="icon">
              <span>
                <AiFillPicture />
              </span>
              <h3>Brand identity</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis diam aliquam faucibus nisi. </p>
          </div>
        </div>
      </div>
    </>
  );
};
