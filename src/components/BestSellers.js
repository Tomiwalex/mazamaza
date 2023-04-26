import bags from "../images/categorybagimage.png";
import shoes from "../images/categoryshoeimage.png";
import skinCare from "../images/categoryskincareimage.png";
import art from "../images/categoryartimage.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const BestSellers = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div
      className="popular-products 
    "
      style={{ background: "#FFF7E3" }}
    >
      <div className="container">
        <div className="product">
          <div className="top-product-header f-jc-sb">
            <h2>Best Sellers</h2>
            <Link
              onClick={() => setProductHeading("Best Sellers")}
              to="/featuredproduct"
            >
              <p>See more {">"}</p>
            </Link>
          </div>

          <div className="product-content">
            <div className="category">
              <Link
                onClick={() => setProductHeading("Bags")}
                to="/featuredproduct"
              >
                <img src={bags} alt="bags" />
              </Link>
              <p></p>
            </div>

            <div className="category">
              <Link
                onClick={() => setProductHeading("Shoes and Accessories")}
                to="/featuredproduct"
              >
                <img src={shoes} alt="shoes" />
              </Link>
              <p></p>
            </div>

            <div className="category">
              <Link
                onClick={() => setProductHeading("Skin Care Products")}
                to="/featuredproduct"
              >
                <img src={skinCare} alt="skin-care" />
              </Link>
              <p>Skin Care Products</p>
            </div>

            <div className="category">
              <Link
                onClick={() => setProductHeading("Arts")}
                to="/featuredproduct"
              >
                <img src={art} alt="art" />
              </Link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
