import React from 'react';
import '../../Styles/home.css';
import { motion } from 'framer-motion';
import background from '../../Assets/background.jpg';
import { Headline } from './background/headline';
import { Categories } from './Categories/categories';
import { Identity } from './identity/identity';
import { Portfolio } from '../../Components/portfolio/portfolio';
import { Offer } from '../../Components/offer/offer';
import { OurTeam } from './team/ourTeam';

const Home = () => {
  return (
    <motion.div className="home" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1, opacity: 1, transition: { duration: 1 } }}>
      <div className="background" style={{ backgroundImage: `url(${background})` }}>
        <div className="headline">
          <Headline />
        </div>
      </div>
      <div className="categories">
        <Categories />
      </div>
      <div className="identity">
        <Identity />
      </div>
      <div className="portfolio">
        <Portfolio />
      </div>
      <div className="team">
        <OurTeam />
      </div>
      <>
        <Offer />
      </>
    </motion.div>
  );
};

export default Home;
