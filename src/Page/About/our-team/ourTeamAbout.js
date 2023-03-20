import React from 'react';
import staff1 from '../../../Assets/staff1.jpg';
import staff2 from '../../../Assets/staff2.jpg';
import staff3 from '../../../Assets/staff3.jpg';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

export const OurteamAbout = () => {
  return (
    <>
      <div className="content">
        <div className="tagline">About us</div>
        <h1>Meet our team</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis, felis at feugiat fermentum, lorem ipsum cursus tellus, et consequat diam orci ac lectus.</p>
      </div>
      <div className="staff">
        <div className="ourStaff">
          <div className="image" style={{ backgroundImage: `url(${staff1})` }} />
          <div className="name">
            <div className="division">Product Designer</div>
            <h3>Bill Paul</h3>
          </div>
          <div className="socmed">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourStaff">
          <div className="image" style={{ backgroundImage: `url(${staff2})` }} />
          <div className="name">
            <div className="division">Frontend Developer</div>
            <h3>Bill Jackson</h3>
          </div>
          <div className="socmed">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
        <div className="ourStaff">
          <div className="image" style={{ backgroundImage: `url(${staff3})` }} />
          <div className="name">
            <div className="division">Backend Developer</div>
            <h3>Jackson Paul</h3>
          </div>
          <div className="socmed">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};
