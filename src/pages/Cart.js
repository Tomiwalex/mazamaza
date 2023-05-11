import React from "react";
import Categorypop from "../components/Categorypop";
import CartItem from "../components/cart/CartItem";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import { AppContext } from "../App";
import { useContext } from "react";
import CartItemTemplate from "../components/cart/CartItemTemplate";
import { Link } from "react-router-dom";
import CartSummary from "../components/cart/CartSummary";

const Cart = () => {
  const { cartItem } = useContext(AppContext);

  return (
    <div className="carts">
      <Header1 />
      <Header2 />
      <Categorypop />
      {/*the category section pop up */}

      <div className="container">
        <div className="cart">
          <h2 className="mt-4 font-semibold text-lg">My Bag</h2>

          <div className="cart-content">
            <CartItem />
          </div>

          {/* The cart summary */}
          {/* /* This is a conditional rendering statement that checks if the length of the `cartItem`
          array is greater than 0. If it is, it will render the `div` element with the class name
          `cart-summary` which contains the summary of the items in the cart, including the
          subtotal, shipping cost, discount, estimated tax, and total. It also includes a clickable
          button that will take the user to the checkout page when clicked. If the `cartItem` array
          is empty, nothing will be rendered. */}
          {cartItem.length > 0 && (
            <CartSummary
              linkTo={"/checkout"}
              buttonName={"Proceed to checkout"}
              subTotalPrice={"US $2,400.00"}
              shippingPrice={"US $100.00"}
              discountPrice={"US $500.00"}
              tax={"-"}
              total={"US $$,2000.00"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
