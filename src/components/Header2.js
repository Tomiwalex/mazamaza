import React, { useState } from "react";
import navigationLists from "../json/navigationList.json";
import graybackIcon from "../images/grayback-arrow.svg";
import { AppContext } from "../App";
import { useContext } from "react";

const Header2 = () => {
  const {
    hamMenu,
    setNavigationSubPage,
    showNavigationSubPage,
    setShowNavigationSubPage,
    setShowOnHover,
    scrolled,
  } = useContext(AppContext);

  const [navigationList, setNavigationList] = useState(navigationLists);

  const showSubList = (id) => {
    const sublists = navigationList.filter((item) => {
      return item.sublistTag == id;
    });

    setNavigationSubPage(sublists);
    console.log(sublists);
  };

  return (
    <div
      style={{ position: scrolled && "fixed" }}
      className={hamMenu ? "header2 fade-in" : "header2 fade-out"}
    >
      <div className="container">
        <div className="header">
          {/* MAPPING THROUGH THE NAVIGATION LIST ARRAY */}
          {navigationList.map((item, index) => {
            return (
              <span
                onMouseOver={() => (
                  setShowOnHover(true), showSubList(item.sublistTag)
                )}
                onMouseLeave={() => setShowOnHover(false)}
                onClick={() => (
                  showSubList(item.sublistTag), setShowNavigationSubPage(true)
                )}
                key={index}
              >
                {item.heading}

                <img className="h-f-t" src={graybackIcon} alt="back" />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header2;
