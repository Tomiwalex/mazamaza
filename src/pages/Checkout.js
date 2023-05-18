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
        
        {/* the cart summary pass the button, link to destination, subtotalprice, shippingprice, discountprice, tax, total, */}
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
