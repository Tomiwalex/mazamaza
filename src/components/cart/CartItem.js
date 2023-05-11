import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import CartItemTemplate from "./CartItemTemplate";
import nocart from "../../images/nocart.svg";
import { Link } from "react-router-dom";
import { Suspense } from "react";

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
        // this is the div displaying no cart item
        <div className="flex items-center justify-center gap-10 flex-wrap lg:flex-nowrap max-w-none mt-9">
          <Suspense fallback="Loading....">
            <img
              className="jello-horizontal w-[60%] lg:w-[70%]"
              src={nocart}
              alt="empty-basket"
            />
          </Suspense>
          <div className="text-center lg:text-left m-2">
            <h1 className="text-black font-semibold text-[40px] mb-4 leading-tight">
              Oops there is nothing here!
            </h1>
            <Link
              to="/home"
              className="text-white inline-block bg-[#0C9B18] px-3 py-2 rounded-[6px] text-sm  hover:scale-[0.99] transition duration-300 ease-in-out"
            >
              Shop Now ➡
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
