import React from 'react';
import '../../Styles/contact.css';
import { motion } from 'framer-motion';
import { Form } from '../../Components/form/form';
import { Offer } from '../../Components/offer/offer';
import { Info } from './info/info';

const Contact = () => {
  return (
    <motion.div className="contact" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1, opacity: 1, transition: { duration: 1 } }}>
      <div className="headline">
        <h1>Contact us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis nunc malesuada, maximus ipsum ac, convallis libero.</p>
      </div>
      <div className="info">
        <Info />
      </div>
      <div className="form">
        <Form />
      </div>
      <>
        <Offer />
      </>
    </motion.div>
  );
};

export default Contact;
