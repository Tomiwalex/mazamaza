import React from "react";
import logo from "../images/footerlogo.svg";

const Announcement = () => {
  return (
    <div className="announcement-bar">
      <div className="container">
        <marquee
          height="45px"
          direction="left"
          behaviour="scroll"
          scrollamount="5"
          className="f-jc-sb"
        >
          <h1 className="announcement-text-1">THE FUTURE RETAIL IS HERE</h1>

          <img src={logo} alt="MAZAMAZA" />

          <h1 className="announcement-text-2">
            SELLING ONLY THE BEST THINGS ONLINE
          </h1>
        </marquee>
      </div>
    </div>
  );
};

export default Announcement;
