import React, { useContext } from "react";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Categorypop from "../components/Categorypop";
import navigationList from "../json/navigationList.json";
import { AppContext } from "../App";
import Footer from "../components/Footer";
import downIcon from "../images/chevron-down.svg";
import PriceRange from "../components/cart/PriceRange";
import Details from "../components/cart/Details";
import ProductCard from "../components/cart/ProductCard";

const Product = () => {
  const { searchItem, setSearchItem } = useContext(AppContext);
  return (
    <div className="products">
      <Header1 />
      <Header2 />
      <Categorypop />
      <div className="product">
        <div className="side-bar">
          <h2>Category</h2>

          <div className="navigationlist">
            {/* MAPPING THROUGH THE .NAVIGATION LIST ARRAY */}
            {navigationList.map((item, index) => {
              return <span key={index}>{item.heading}</span>;
            })}

            <div className="green f-jc-sb">
              <p>See all categories</p>
              <img src={downIcon} alt="" />
            </div>

            <h2>Price</h2>
            <PriceRange />

            {/* for details you need to pass the detailTitle props and detailList prop, the detailList prop should be an array */}
            <Details
              detailTitle={"Bag"}
              detailList={[
                "Gucci",
                "Vercace",
                "luis Vuiton",
                "Dolce",
                "Puma",
                "Givenchy",
                "Addidas",
                "Nike",
                "Tom Hilfiger",
              ]}
            />
            <Details
              detailTitle={"Clothes"}
              detailList={[
                "Gucci",
                "Vercace",
                "luis Vuiton",
                "Dolce",
                "Puma",
                "Givenchy",
                "Addidas",
                "Nike",
                "Tom Hilfiger",
              ]}
            />
          </div>
        </div>

        <div className="content">
          {/* the head contains filtering options */}
          <div className="content-head f-jc-sb">
            <p>search result for '{searchItem}'</p>

            <div className="sort f-jc-sb">
              <div className="f-jc-sb">
                <span>Sort by:</span>

                <select className="select-type">
                  <option value="">price {"{low to high}"} </option>
                  <option value="">New</option>
                  <option value="">old</option>
                </select>
              </div>

              <div className="country f-jc-sb">
                <span>Shipping to:</span>

                <select className="select-country">
                  <option value="uk">UK</option>
                  <option value="nigeria">Nigeria</option>
                  <option value="ghana">Ghana</option>
                </select>
              </div>
            </div>
          </div>

          <div className="items">
            {/* the product card with the add to cart function */}
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
