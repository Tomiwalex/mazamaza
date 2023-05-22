import React, { useContext } from "react";
import { AppContext } from "../../App";

const PriceRange = () => {
  const price = 0;
  const {setMaxPrice,maxPrice,setMinPrice,minPrice,} = useContext(AppContext)
  return (
    <div className="price-range f-jc-sb">
      <span className="value f-jc-sb">
        <span>$</span>
        <input className="min" type="number" placeholder="from" onChange={e=>{setMinPrice(e.target.value)}}/>
      </span>

      <span>-</span>

      <span className="value f-jc-sb">
        <span>$</span>
        <input className="max" type="number" placeholder="to" onChange={e=>{setMaxPrice(e.target.value)}}/>
      </span>
    </div>
  );
};

export default PriceRange;
