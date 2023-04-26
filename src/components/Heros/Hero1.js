import React from "react";
import arrowIcon from "../../images/arrow-icon.svg";
import heroimg from "../../images/hero1img.png";
import { Link } from "react-router-dom";

const Hero1 = () => {
  return (
    <div className="heros hero1">
      <div className="Container">
        <div className="hero f-jc-sb">
          <div className="text">
            <h1>Unleash your Inner Beauty with our Latest Arrivals!</h1>

            <button className="f-jc-sb">
              <Link to="/product">
                {" "}
                Shop Now
                <img src={arrowIcon} />
              </Link>
            </button>
          </div>
          <div className="image">
            <img src={heroimg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
