import React from "react";
import exclusive_image from '../Assets/exclusive_image.png';
import './offer.css';

const Offer = () => {
  return (
    <div className="offer">
      <div className="offer-container">
        <div className="offer-left">
            <h2>exclusive</h2>
            <h2>offers for you</h2>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CHECK NOW</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} />
        </div>
      </div>
    </div>
  );
};

export default Offer;
