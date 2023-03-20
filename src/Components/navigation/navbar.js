import React, { useState } from 'react';
import '../../Styles/navbar.css';
import { IoMdReorder } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Links } from './hiddenLinks/links';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openHandler = () => {
    setNavOpen(true);
  };

  const closeHandler = () => {
    setNavOpen(false);
  };

  return (
    <div className="navbar">
      <div className="title">
        <h1>Naudhil</h1>
      </div>
      <div className="linkBar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      {navOpen && <Links className="hiddenLinks" closeMenu={closeHandler} />}
      <div className="tapMenu" onClick={openHandler}>
        <IoMdReorder />
      </div>
    </div>
  );
};

export default Navbar;
