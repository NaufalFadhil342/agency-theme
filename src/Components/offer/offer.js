import { useNavigate } from 'react-router-dom';
import '../../Styles/offer.css';

export const Offer = () => {
  const navigate = useNavigate();

  return (
    <div className="offer">
      <h1>Have a project in mind ? Let's get to work</h1>
      <button className="actions" onClick={() => navigate('/contact')}>
        Contact Us
      </button>
    </div>
  );
};
