import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const navigate = useNavigate();

  return (
    <div className="sendUs">
      <h3>Send us a message and we will respond as quickly as possible</h3>
      <form>
        <div className="identity">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input id="name" required />
          </div>
          <div className="email">
            <label htmlFor="Email">Email</label>
            <input id="email" type="email" required />
          </div>
        </div>
        <div className="text">
          <div className="message">
            <label htmlFor="message">Message</label>
            <textarea rows="5" id="message" required />
          </div>
        </div>
        <div className="action">
          <button className="submit" onClick={() => navigate('/')}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
