import React from 'react';
import '../../Styles/services.css';
import { motion } from 'framer-motion';
import { Benefit } from './servBenefit/benefit';
import { Desc } from './servDesc/desc';
import { ServicesList } from './serviceList/servicesList';
import { Offer } from '../../Components/offer/offer';

const Services = () => {
  return (
    <motion.div className="services" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1, opacity: 1, transition: { duration: 1 } }}>
      <div className="ourServices">
        <h1>Our Services</h1>
        <div className="servicesList">
          <ServicesList />
        </div>
      </div>
      <div className="desc">
        <Desc />
      </div>
      <div className="benefit">
        <Benefit />
      </div>
      <>
        <Offer />
      </>
    </motion.div>
  );
};

export default Services;
