import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import CartItemTemplate from "./CartItemTemplate";

const CartItem = () => {
  const { cartItem } = useContext(AppContext);

  return (
    <div>
      {cartItem.length ? (
        cartItem.map((item, index) => {
          return (
            <div key={index}>
              <CartItemTemplate
                itemName={item.name}
                itemPrice={item.price}
                itemCondition={item.condition}
                cartId={item.cartId}
              />
            </div>
          );
        })
      ) : (
        <div
          style={{
            width: "250px",
            height: "250px",
            position: "relative",
            borderRadius: "50%",
            margin: "20% 17%",
            background: "rgb(253 197 13 / 4%)",
            color: "rgb(94 94 94)",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              position: "absolute",
              width: "288px",
              top: "88px",
              left: "-18px",
            }}
          >
            No Item Added yet
          </h1>
        </div>
      )}
    </div>
  );
};

export default CartItem;
