import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../json/products.json";
import productImg from "../images/braided.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper";

const FashionHair = () => {
  return (
    <div className="fashion-hair">
      <div className="top-product-header ">
        <div className="container f-jc-sb">
          <h2>Fashion Fair</h2>
          <Link to="/product">
            <p>See more {">"}</p>
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="hair-content">
          <>
            <Swiper
              navigation={true}
              slidesPerView={2}
              grid={{
                rows: 2,
              }}
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
              modules={[Grid, Navigation]}
              className="mySwiper"
            >
              {products.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="content">
                      <div className="img">
                        <img src={productImg} />
                      </div>

                      <div className="text">
                        <p className="product-name">{item.name}</p>

                        <p className="product-price">{item.price}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        </div>
      </div>
    </div>
  );
};

export default FashionHair;
