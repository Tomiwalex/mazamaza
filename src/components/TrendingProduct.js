// Import Swiper React components
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import { Suspense } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/navigation";
// import { Grid, Navigation } from "swiper";

export const TrendingProduct = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="trending-products top-products slider-type-1">
      <div style={{ background: "#6ACC1A" }} className="top-product-header ">
        <div className="container f-jc-sb">
          <h2>Trending Products</h2>

          <Link
            onClick={() => setProductHeading("Trending Products")}
            to="/featuredproduct"
          >
            <p>See more {">"}</p>
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="top-product-content f-jc-sb">
          {products.map((product, index) => {
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
