import React from 'react';
import '../../Styles/footer.css';
import logo from '../../Assets/naudhil.png';
import { About } from './about/about';
import { Location } from './location/location';
import { Policy } from './policy/policy';
import { FaRegCopyright, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="brand">
          <img src={logo} alt="" /> <h1>NAUDHIL</h1>
        </div>
        <div className="biodata">
          <div className="about">
            <About />
          </div>
          <div className="location">
            <Location />
          </div>
          <div className="policy">
            <Policy />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="poweredBy">
          <FaRegCopyright /> <p>2023 Naudhil. Proudly powered by Naudhil</p>
        </div>
        <div className="socmed">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </>
  );
};

export default Footer;
