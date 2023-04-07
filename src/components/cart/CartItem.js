import React, { useContext, useState } from "react";
import productimg from "../../images/productimg.png";
import deleteimg from "../../images/delete-icon.png";
import { AppContext } from "../../App";

const CartItem = () => {
  const [count, setCount] = useState(0);
  const { cartItem } = useContext(AppContext);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {cartItem.length ? (
        cartItem.map((item, index) => {
          return (
            <div key={index} className="cart-item">
              <img className="product-image" src={productimg} />

              <div className="cart-details">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
                <p className="product-condition">
                  Condition: <span>{item.condition}</span>
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
        })
      ) : (
        <h1>No Item Added yet</h1>
      )}
    </div>
  );
};

export default CartItem;
