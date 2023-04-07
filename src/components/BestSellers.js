import bags from "../images/categorybagimage.png";
import shoes from "../images/categoryshoeimage.png";
import skinCare from "../images/categoryskincareimage.png";
import art from "../images/categoryartimage.png";
import { Link } from "react-router-dom";

const BestSellers = () => {
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
            <Link to="/product">
              <p>See more {">"}</p>
            </Link>
          </div>

          <div className="product-content">
            <div className="category">
              <img src={bags} alt="bags" />
              <p>Bags</p>
            </div>

            <div className="category">
              <img src={shoes} alt="shoes" />
              <p>Shoes and Accessories</p>
            </div>

            <div className="category">
              <img src={skinCare} alt="skin-care" />
              <p>Skin Care Products</p>
            </div>

            <div className="category">
              <img src={art} alt="art" />
              <p>Arts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
