import React, { Suspense, useContext, useState, useEffect } from "react";
import logo from "../../images/logo-img.svg";
import itemimg from "../../images/shop1.png";
import products from "../../json/products.json";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import noProduct from "../../assets/lottie/noProduct.json";
import { convertCurrency } from "../../hooks/convertCurrency";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { handleAddtoCart } = useContext(AppContext);
  const [items, setItems] = useState(product);
  const [convertedPrices, setConvertedPrices] = useState([]);

  useEffect(() => {
    setItems(product)
    async function convertPrices() {
      const converted = await Promise.all(
        items.map((item) => convertCurrency(item.currency, item.price))
      );
      setConvertedPrices(converted);
    }
    convertPrices();
  }, [items,product]);

  return (
    <Suspense fallback={<p>loading....</p>}>
      <div className="product-card f-jc-sb">
        {/* mapping the items from the database */}
        {items.length > 0 ? (
          items.map((item, index) => {
            return (
              <div className="item" key={index}>
                <Suspense fallback={logo}>
                  <img
                    onClick={() => {
                      navigate("../itemdetails");
                    }}
                    src={item.productImage[0] || itemimg}
                    alt="product-image"
                  />
                </Suspense>

                <p className="item-name">{item.name}</p>

                <p className="item-price">{convertedPrices[index]}</p>

                <button onClick={() => handleAddtoCart(item)}>
                  Add to My Bag
                </button>
              </div>
            );
          })
        ) : (
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
        )}
      </div>
    </Suspense>
  );
};

export default ProductCard;
