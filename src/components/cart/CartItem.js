import React, { useState } from "react";
import productimg from "../../images/productimg.png";
import deleteimg from "../../images/delete-icon.png";

const CartItem = ({ productName, productPrice, productCondition }) => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cart-item">
      <img className="product-image" src={productimg} />

      <div className="cart-details">
        <p className="product-name">{productName}</p>
        <p className="product-price">{productPrice}</p>
        <p className="product-condition">
          Condition: <span>{productCondition}</span>
        </p>

        <div className="product-counter">
          <span onClick={() => decreaseCount()} className="minus">
            -
          </span>

          <span className="count">{count}</span>

          <span onClick={() => increaseCount()} className="plus">
            +
          </span>
        </div>

        <p className="delete-product f-jc-sb">
          <img src={deleteimg} />
          Delete
        </p>
      </div>
    </div>
  );
};

export default CartItem;
