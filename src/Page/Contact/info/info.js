import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Info = () => {
  return (
    <>
      <div className="identity">
        <div className="email">Email</div>
        <p>office@example.com</p>
      </div>
      <div className="identity">
        <div className="location">Location</div>
        <p>Bogor, West Java, Indonesia</p>
      </div>
      <div className="identity">
        <div className="social">Social</div>
        <div className="icon">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};
