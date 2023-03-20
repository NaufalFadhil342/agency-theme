import React from 'react';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <>
      <div style={{ textTransform: 'uppercase' }}>
        <b>About</b>
      </div>
      <div className="nav">
        <Link to="/services">Services</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/">careers</Link>
      </div>
    </>
  );
};
