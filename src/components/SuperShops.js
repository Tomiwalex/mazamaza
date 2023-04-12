import React from "react";
import popularShop from "../json/popularShops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SuperShop = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-shops" style={{ background: "white" }}>
      <div className="container">
        <div className="shop">
          <div className="top-product-header f-jc-sb">
            <h2>Super Shop</h2>
            <Link
              onClick={() => setProductHeading("Super Shop")}
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
                {popularShop.map((shop, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="popular-shop">
                        <Link to="/itemdtails">
                          <img src={require("../images/shop2.png")} />
                          <p>{shop["shop-name"]}</p>
                          <small>ondo state, nigeria.</small>
                        </Link>
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

export default SuperShop;
