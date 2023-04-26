import React from "react";
import arrowIcon from "../../images/arrow-icon.svg";
import heroimg from "../../images/hero3img.png";
import { Link } from "react-router-dom";

const Hero3 = () => {
  return (
    <div className="heros hero3">
      <div className="Container">
        <div className="hero f-jc-sb">
          <div className="text">
            <h1>
              Elevate Your Home Decor with Our Beautifully Crafted Pieces!
            </h1>

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

export default Hero3;
