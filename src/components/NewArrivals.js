import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
import { convertCurrency } from "../hooks/convertCurrency";

const NewArrivals = () => {
  const { setProductHeading } = useContext(AppContext);
  const [newArrivals, setnewArrivals] = useState([]);
  const [convertedPrices, setConvertedPrices] = useState([]);

  async function convertPrices() {
    const converted = await Promise.all(
      newArrivals.map((item) => convertCurrency(item.currency, item.price))
    );
    setConvertedPrices(converted);
    console.log(converted);
  }

  useEffect(() => {
    convertPrices();
  }, [newArrivals]);

  const getnewArrivals = async () => {
    try {
      const response = await axios.get(
        `https://mazamaza.onrender.com/api/product/filter?sort=createdAt:desc`
      );
      if (response) {
        setnewArrivals(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      // alert('could not load products in this category')
      console.log(error);
    }
  };

  useEffect(() => {
    getnewArrivals();
  }, []);

  return (
    <div className="popular-items" style={{ background: "#F0FFF3" }}>
      <div className="container">
        <div className="item">
          <div className="top-product-header f-jc-sb">
            <h2>New Arrivals</h2>

            <Link
              onClick={() => setProductHeading("New Arrivals")}
              to="/featuredproduct"
            >
              <p>See more {">"}</p>{" "}
            </Link>
          </div>

          <div className="item-content">
            <>
              <Swiper
                slidesPerView={2}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  // 1024: {
                  //   slidesPerView: ,
                  // },
                }}
                className="mySwiper"
              >
                {/* getting the popularitem list from popularitems.json and mapping through the array */}
                {newArrivals.slice(0,20).map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Link to="/itemdetails" state={item}>
                      <div className="popular-item">
                        <img src={item.productImage[0]} />
                        <p>{item.name}</p>
                      </div>
                      </Link>

                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
