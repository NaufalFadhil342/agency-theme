import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';

export const Links = ({ className, closeMenu }) => {
  return (
    <div className={className}>
      <div className="closeIcon" onClick={closeMenu}>
        <IoMdClose />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};
