import React, { Suspense, useState } from "react";
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

const TopProduct = () => {
  const [topProducts, setTopProducts] = useState(products);
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="top-products">
      <div className="top-product-header ">
        <div className="container f-jc-sb">
          <h2>Top Products</h2>

          <Link
            onClick={() => setProductHeading("Top Products")}
            to="/featuredproduct"
          >
            <p>See more {">"}</p>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="top-product-content f-jc-sb">
          {topProducts.map((product, index) => {
            return (
              <Suspense key={index} fallback={"loading.."}>
                <div className="product">
                  <Link to="/itemdetails">
                    {" "}
                    <img
                      className="product-image"
                      //src={product.image}
                      //  the real image should be added to the src above
                      src={productImg}
                      alt={`img of ${product.name}`}
                    />
                  </Link>

                  <p className="product-name">{product.name}</p>

                  {/* the product's price */}
                  <p className="product-price">{product.price}</p>
                </div>
              </Suspense>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopProduct;
