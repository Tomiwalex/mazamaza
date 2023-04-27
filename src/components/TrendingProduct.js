// Import Swiper React components
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import noProduct from "../assets/lottie/noProduct.json";
import { AppContext } from "../App";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Suspense } from "react";
import { convertCurrency } from "../hooks/convertCurrency";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/navigation";
// import { Grid, Navigation } from "swiper";

export const TrendingProduct = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const { setProductHeading } = useContext(AppContext);


  const [convertedPrices, setConvertedPrices] = useState([]);


  async function convertPrices() {
    const converted = await Promise.all(
      trendingProducts.map((item) => convertCurrency(item.currency, item.price))
    );
    setConvertedPrices(converted);
    console.log(converted)
  }

  useEffect(() => {

    convertPrices();
  }, [trendingProducts]);

  const getTrendingProducts = async () =>{
    try {
      const response  = await axios.get(`https://mazamaza.onrender.com/api/product/filter?sort=price`)
      if (response) {

        setTrendingProducts(response.data.data)
        console.log(response.data.data)
      }

    } catch (error) {
      // alert('could not load products in this category')
      console.log(error)
    }
  }

  useEffect(()=>{
    getTrendingProducts()
  },[])

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
          {trendingProducts?.length>0?trendingProducts?.map((product, index) => {
            return (
              <Suspense key={index} fallback={"loading.."}>
                <div className="product">
                  <Link to="/itemdetails">
                    {" "}
                    <img
                      className="product-image"
                      //src={product.image}
                      //  the real image should be added to the src above
                      src={product.productImage[0] || productImg}
                      alt={`img of ${product.name}`}
                    />
                  </Link>

                  <p className="product-name">{product.name}</p>

                  {/* the product's price */}
                  <p className="product-price">{convertedPrices[index] || `${ product.currency} ${ product.price}`}</p>
                </div>
              </Suspense>
            );
          }):
          <div
          className=" w-full flex item-center justify-center bg-white"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            background: "white",
          }}
        >
          <Lottie
            options={{
              animationData: noProduct,
              loop: true,
            }}
            width={200}
          />
          <p className="m-4">No product in this category</p>
        </div>
          }
        </div>
      </div>
    </div>
  );
};
