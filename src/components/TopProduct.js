import React, { Suspense, useEffect, useState } from "react";
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
import Lottie from "react-lottie";
import noProduct from "../assets/lottie/noProduct.json";
import { useContext } from "react";
import axios from "axios";
import { convertCurrency } from "../hooks/convertCurrency";

const TopProduct = () => {
  const [topProducts, setTopProducts] = useState([]);
  const { setProductHeading } = useContext(AppContext);
  const [convertedPrices, setConvertedPrices] = useState([]);


  async function convertPrices() {
    const converted = await Promise.all(
      topProducts.map((item) => convertCurrency(item.currency, item.price))
    );
    setConvertedPrices(converted);
    console.log(converted)
  }

  useEffect(() => {

    convertPrices();
  }, [topProducts]);

  const getTopProducts = async () =>{
    try {
      const response  = await axios.get(`https://mazamaza.onrender.com/api/product/filter?sort=rating`)
      if (response) {

        setTopProducts(response.data.data)
        console.log(response.data.data)
      }

    } catch (error) {
      // alert('could not load products in this category')
      console.log(error)
    }
  }

  useEffect(()=>{
    getTopProducts()
  },[])

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
          {topProducts.length>0?
          topProducts.map((product, index) => {
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
      
      <a href="http://" target="_blank" rel="noopener noreferrer"></a>
    </div>
  );
};

export default TopProduct;
