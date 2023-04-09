import React, { useState } from "react";
import productimg from "../../images/productimg.png";
import deleteimg from "../../images/delete-icon.png";

const CartItemTemplate = ({ itemName, itemPrice, itemCondition }) => {
  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const [count, setCount] = useState(1);

  return (
    <div className="cart-item">
      <img className="product-image" src={productimg} />

      <div className="cart-details">
        <p className="product-name">{itemName}</p>
        <p className="product-price">{itemPrice}</p>
        <p className="product-condition">
          Condition: <span>{itemCondition}</span>
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

export default CartItemTemplate;
