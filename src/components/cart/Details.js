import React from "react";
import downIcon from "../../images/chevron-down.svg";
import { useState } from "react";

const Details = ({ detailTitle, detailList }) => {
  const [detailsShown, setDetailsShown] = useState(false);
  return (
    <div className="details">
      <p onClick={() => setDetailsShown(!detailsShown)} className="f-jc-sb">
        <span>{detailTitle}</span>
        <img
          style={{ transform: detailsShown ? "rotate(180deg)" : "none" }}
          src={downIcon}
        />
      </p>

      {detailsShown && (
        <div className="detail-sub-list">
          {detailList.map((item, index) => {
            return (
              <div key={index} className="list f-jc-sb">
                <input type="checkbox" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Details;
