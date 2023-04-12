import React from "react";
import popularShop from "../json/popularShops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import { AppContext } from "../App";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-shops" style={{ background: "#F0FFF3" }}>
      <div className="container">
        <div className="shop">
          <div className="top-product-header f-jc-sb">
            <h2>New Arrivals</h2>

            <Link
              onClick={() => setProductHeading("New Arrivals")}
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
                        <img src={require("../images/shop2.png")} />
                        <p>{shop["shop-name"]}</p>
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

export default NewArrivals;
