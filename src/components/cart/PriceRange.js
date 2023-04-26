import React from "react";

const PriceRange = () => {
  const price = 0;
  return (
    <div className="price-range f-jc-sb">
      <span className="value f-jc-sb">
        <span>$</span>
        <input className="min" type="nmber" placeholder="from" />
      </span>

      <span>-</span>

      <span className="value f-jc-sb">
        <span>$</span>
        <input className="max" type="number" placeholder="to" />
      </span>
    </div>
  );
};

export default PriceRange;
