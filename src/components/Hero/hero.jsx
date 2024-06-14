import React from "react";
import Model from "../Assets/Images/model.png";
import arrow from "../Assets/Images/next.png";
import Wave from "../Assets/Images/wave.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-comp">
      <div className="hero-left">
          <h2>NEW ARRIVALS ONLY</h2>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={Wave} />
          </div>
          <p>collections</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} />
          </div>
        </div>
      <div className="hero-right">
        <img src={Model} />
      </div>
    </div>
  );
};

export default Hero;
