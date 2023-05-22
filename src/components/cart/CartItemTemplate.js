import React, { useEffect, useState } from "react";
import productimg from "../../images/productimg.png";
import deleteimg from "../../images/delete-icon.png";
import { useContext } from "react";
import { AppContext } from "../../App";

const CartItemTemplate = ({
  itemName,
  itemPrice,
  itemQuantity,
  cartId,
  itemImageUrl,
}) => {
  const { handleCartItemDelete,cartTotal, handleChangeProductQuantity,setCartTotal } =
    useContext(AppContext);

  const increaseCount = () => {
    setCount(count + 1);
    handleChangeProductQuantity(cartId, count+1);
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      handleChangeProductQuantity(cartId, count-1);
    }
  };

  const [count, setCount] = useState(itemQuantity);

  return (
    <div className="cart-item">
      <img className="product-image" src={itemImageUrl} />

      <div className="cart-details">
        <p className="product-name">{itemName}</p>
        <p className="product-price">{itemPrice.split(' ')[0] } {" "} {itemPrice.split(' ')[1] * itemQuantity}</p>
        <p className="text-sm text-deep-gray">{itemPrice}{" "}/unit</p>

        <p className="product-condition">
          Quantity: <span>{itemQuantity}</span>
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

        <p
          onClick={() => handleCartItemDelete(cartId)}
          className="delete-product f-jc-sb"
        >
          <img src={deleteimg} />
          Delete
        </p>
      </div>
    </div>
  );
};

export default CartItemTemplate;
