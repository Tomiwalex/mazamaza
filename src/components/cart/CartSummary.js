import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { useEffect } from "react";
import { useState } from "react";

const CartSummary = ({
  linkTo,
  buttonName,
  subTotalPrice,
  shippingPrice,
  discountPrice,
  total,
}) => {
  const { cartTotal } = useContext(AppContext);
  const [subTotal, setSubTotal] = useState();

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <hr />

      <div className="sub-total f-jc-sb">
        <p>Subtotal</p>
        <p className="sub-total-price">{cartTotal || `NGN ${subTotalPrice}`}</p>
      </div>

      <div className="shipping f-jc-sb">
        <p>Shipping</p>
        <p className="shipping-price">{shippingPrice}</p>
      </div>

      <div className="discount shipping f-jc-sb">
        <p>Discount</p>
        <p className="discount-price">{discountPrice}</p>
      </div>

      {/* <div className="estimated-tax shipping f-jc-sb">
        <p>Estimated Tax</p>
        <p className="tax-price">{tax}</p>
      </div> */}

      <hr />

      <div className="total f-jc-sb">
        <h3>Total</h3>
        <h3>{cartTotal || `NGN ${subTotalPrice}`}</h3>
      </div>

      {/* /* Creating a clickable link that will take the user to the checkout page when clicked.
              The `to` attribute specifies the URL path for the checkout page, and the `button`
              element creates a button that the user can click to navigate to the checkout page. The
              `Link` component is provided by the `react-router-dom` library and is used to create
              links between different pages in a React application. */}
      <Link
        to={linkTo}
        state={{
          linkTo,
          buttonName,
          subTotalPrice: cartTotal || `NGN ${subTotalPrice}`,
          shippingPrice,
          discountPrice,
          total,
        }}
      >
        <button>{buttonName}</button>
      </Link>
    </div>
  );
};

export default CartSummary;
