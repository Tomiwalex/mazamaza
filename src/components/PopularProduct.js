import React from "react";
import bags from "../images/categorybagimage.png";
import shoes from "../images/categoryshoeimage.png";
import skinCare from "../images/categoryskincareimage.png";
import art from "../images/categoryartimage.png";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const PopularProduct = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-products ">
      <div className="container">
        <div className="product">
          <div className="top-product-header f-jc-sb">
            <h2>Popular Products</h2>

            <Link
              onClick={() => setProductHeading("Popular Products")}
              to="/featuredproduct"
            >
              <p>See more {">"}</p>{" "}
            </Link>
          </div>

          <div className="product-content">
            <div className="category">
              <img src={bags} alt="bags" />
              <Link
                onClick={() => setProductHeading(`Popular Products>Bags`)}
                to="/featuredproduct"
              >
                <p>Bags </p>
              </Link>
            </div>

            <div className="category">
              <Link
                onClick={() =>
                  setProductHeading("Popular Products>Shoes and Accessories")
                }
                to="/featuredproduct"
              >
                <img src={shoes} alt="shoes" />

                <p>Shoes and Accessories</p>
              </Link>
            </div>

            <div className="category">
              <Link
                onClick={() =>
                  setProductHeading("Popular Products>Skin Care Products")
                }
                to="/featuredproduct"
              >
                <img src={skinCare} alt="skin-care" />
                <p>Skin Care Products</p>
              </Link>
            </div>

            <div className="category">
              <Link
                onClick={() => setProductHeading("Popular Products>Arts")}
                to="/featuredproduct"
              >
                <img src={art} alt="art" />
                <p>Arts</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
