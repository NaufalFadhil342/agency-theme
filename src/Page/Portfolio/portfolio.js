import React from 'react';
import '../../Styles/portfolio.css';
import { motion } from 'framer-motion';
import { Offer } from '../../Components/offer/offer';
import { Content } from './bodyContent/content';

const Portfolio = () => {
  return (
    <motion.div className="portfolioPage" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1, opacity: 1, transition: { duration: 1 } }}>
      <div className="headline">
        <h1>Our portfolio</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc malesuada.</p>
      </div>
      <div className="body">
        <Content />
      </div>
      <>
        <Offer />
      </>
    </motion.div>
  );
};

export default Portfolio;
