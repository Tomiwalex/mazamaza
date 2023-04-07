import React from "react";
import arrowIcon from "../../images/arrow-icon.svg";
import heroimg from "../../images/hero4img.png";
import { Link } from "react-router-dom";

const Hero4 = () => {
  return (
    <div className="heros hero4">
      <div className="Container">
        <div className="hero f-jc-sb">
          <div className="text">
            <h1>
              Shop Smarter, Not Harder - Find Everything You Need in One Place!
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

export default Hero4;
