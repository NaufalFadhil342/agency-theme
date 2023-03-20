import React from 'react';
import '../../Styles/about.css';
import { motion } from 'framer-motion';
import { AboutUs } from './about-us/aboutUs';
import { OurteamAbout } from './our-team/ourTeamAbout';
import { Ourwork } from './ourwork/ourwork';
import { Offer } from '../../Components/offer/offer';

const About = () => {
  return (
    <motion.div className="aboutPage" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1, opacity: 1, transition: { duration: 1 } }}>
      <div className="aboutUsPage">
        <AboutUs />
      </div>
      <div className="ourWork">
        <Ourwork />
      </div>
      <div className="ourTeamAbout">
        <OurteamAbout />
      </div>
      <>
        <Offer />
      </>
    </motion.div>
  );
};

export default About;
