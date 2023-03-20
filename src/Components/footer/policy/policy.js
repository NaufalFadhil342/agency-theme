import React from 'react';
import { Link } from 'react-router-dom';

export const Policy = () => {
  return (
    <>
      <div style={{ textTransform: 'uppercase' }}>
        <b>Policy</b>
      </div>
      <div className="nav">
        <Link>Privacy</Link>
        <Link>Cookie policy</Link>
        <Link>Term {`&`} Condition</Link>
        <Link>About us</Link>
      </div>
    </>
  );
};
