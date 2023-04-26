import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({
  linkTo,
  buttonName,
  subTotalPrice,
  shippingPrice,
  discountPrice,
  tax,
  total,
}) => {
  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>
      <hr />

      <div className="sub-total f-jc-sb">
        <p>Subtotal</p>
        <p className="sub-total-price">{subTotalPrice}</p>
      </div>

      <div className="shipping f-jc-sb">
        <p>Shipping</p>
        <p className="shipping-price">{shippingPrice}</p>
      </div>

      <div className="discount shipping f-jc-sb">
        <p>Discount</p>
        <p className="discount-price">{discountPrice}</p>
      </div>

      <div className="estimated-tax shipping f-jc-sb">
        <p>Estimated Tax</p>
        <p className="tax-price">{tax}</p>
      </div>

      <hr />

      <div className="total f-jc-sb">
        <h3>Total</h3>
        <h3>{total}</h3>
      </div>

      {/* /* Creating a clickable link that will take the user to the checkout page when clicked.
              The `to` attribute specifies the URL path for the checkout page, and the `button`
              element creates a button that the user can click to navigate to the checkout page. The
              `Link` component is provided by the `react-router-dom` library and is used to create
              links between different pages in a React application. */}
      <Link to={linkTo}>
        {" "}
        <button>{buttonName}</button>
      </Link>
    </div>
  );
};

export default CartSummary;
