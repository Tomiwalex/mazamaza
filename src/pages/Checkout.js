import React from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import Footer from "../components/Footer";
import CartSummary from "../components/cart/CartSummary";

const Checkout = () => {
  return (
    <div className="checkouts">
      <Header1 />
      <Header2 />
      <Categorypop />
      <div className="checkout">
        <div className="address">
          <h2>Shipping address</h2>

          <h3>Name Family</h3>

          {/* the buyers address */}
          <p>
            2 Savi road, Reading, Berkshire RB3 7LU, <br />
            United Kingdom <br />
            Phone: 12 3456 78900
          </p>

          <p className="green">Change address</p>
        </div>

        {/* form for changing address */}
        <div className="add-address">
          <form>
            <h2>Shipping address</h2>

            {/* Full name */}
            <fieldset>
              <legend>Full name</legend>
              <input type="text" required />
            </fieldset>

            {/* address */}
            <fieldset>
              <legend>Address</legend>
              <input type="text" required />
            </fieldset>

            {/* Street Adress */}
            <fieldset>
              <legend>Street address</legend>
              <input type="text" required />
            </fieldset>

            {/* town/city */}
            <fieldset>
              <legend>Town/City</legend>
              <input type="text" required />
            </fieldset>

            {/* Country */}
            <fieldset>
              <legend>Country</legend>
              <input type="text" required />
            </fieldset>

            {/* postcode */}
            <fieldset>
              <legend>Postcode</legend>
              <input type="text" required />
            </fieldset>

            {/* phone number */}
            <fieldset className="f">
              <legend>Phone number</legend>

              <select>
                <option value="+234">+234</option>
                <option value="+44">+44</option>
              </select>

              <input type="text" required />
            </fieldset>

            <button>Save</button>
            <button className="btn2">Cancel</button>
          </form>
        </div>

        {/* the cart summary pass the button props and the link to destination */}
        <CartSummary
          subTotalPrice={"US $2,400.00"}
          shippingPrice={"US $100.00"}
          discountPrice={"US $500.00"}
          tax={"-"}
          total={"US $$,2000.00"}
          linkTo={"/checkout"}
          buttonName={"Confirm and Pay"}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
