import React from "react";
import popularShop from "../json/popularShops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const PopularShops = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-shops" id="featured-shops">
      <div className="container">
        <div className="shop">
          <div className="top-product-header f-jc-sb">
            <h2>Popular Shops</h2>
            <Link
              onClick={() => setProductHeading("Popular Shops")}
              to="/featuredproduct"
            >
              <p>See more {">"}</p>
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
                {popularShop.map((shop, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="popular-shop">
                        <Link to="/itemdetails">
                          <img src={require("../images/shop1.png")} />
                        </Link>
                        <p>{shop["shop-name"]}</p>

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

export default PopularShops;
