// Import Swiper React components
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";
import { Suspense } from "react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/navigation";
// import { Grid, Navigation } from "swiper";
import { useContext } from "react";
import { AppContext } from "../App";

export const FashionTrend = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="trending-products top-products slider-type-1">
      <div style={{ background: "none" }} className="top-product-header ">
        <div className="container f-jc-sb" style={{ color: "black" }}>
          <h2>Fashion Trend</h2>
          <Link
            onClick={() => setProductHeading("Fashion Trend")}
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
