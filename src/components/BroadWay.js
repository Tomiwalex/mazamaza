import React from "react";
import popularShop from "../json/popularShops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";

const BroadWay = () => {
  const navigate = useNavigate();
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="popular-shops" style={{ background: "rgb(240, 255, 243)" }}>
      <div className="container">
        <div className="shop">
          <div className="top-product-header f-jc-sb">
            <h2>Broad Way</h2>
            <Link
              onClick={() => setProductHeading("Broad Way")}
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
                    <SwiperSlide
                      onClick={() => navigate("../product")}
                      key={index}
                    >
                      <div className="popular-shop">
                        <Link to="/itemdetails">
                          <img src={require("../images/shop2.png")} />
                        </Link>
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

export default BroadWay;
