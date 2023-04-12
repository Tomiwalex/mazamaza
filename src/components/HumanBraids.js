import React from "react";
import products from "../json/products.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const HumanBraids = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-shops">
      <div className="container">
        <div className="shop">
          <div className="top-product-header f-jc-sb">
            <h2>Trending Hair</h2>

            <Link
              onClick={() => setProductHeading("Trending Hair")}
              to="/featuredproduct"
            >
              <p>See more {">"}</p>{" "}
            </Link>
          </div>

          <div className="shop-content">
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
                {/* getting the popularshop list from popularshops.json and mapping through the array */}
                {products.map((shop, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="popular-shop">
                        <Link to="/itemdetails">
                          <img src={require("../images/braided.png")} />
                        </Link>
                        <p>{shop.name}</p>
                        <p>{shop.price}</p>

                        {/* {p * shop.star} */}
                      </div>
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

export default HumanBraids;
