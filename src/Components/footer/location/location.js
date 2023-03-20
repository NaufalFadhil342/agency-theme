import React from 'react';
import { Link } from 'react-router-dom';

export const Location = () => {
  return (
    <>
      <div style={{ textTransform: 'uppercase' }}>
        <b>Locations</b>
      </div>
      <div className="nav">
        <Link to="/">Amsterdam</Link>
        <Link to="/">London</Link>
        <Link to="/">Paris</Link>
        <Link to="/">New York</Link>
      </div>
    </>
  );
};
