// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../json/products.json";
import productImg from "../images/productimg.png";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper";
import { useContext } from "react";
import { AppContext } from "../App";

export const FashionTrend = () => {
  const { setProductHeading } = useContext(AppContext);

  return (
    <div className="trending-products top-products slider-type-1">
      <div style={{ background: "none" }} className="top-product-header ">
        <div className="container f-jc-sb" style={{ color: "black" }}>
          <h2>Fashion Trend</h2>
          <Link
            onClick={() => setProductHeading("Fashion Trend")}
            to="/featuredproduct"
          >
            <p>See more {">"}</p>
          </Link>
        </div>
      </div>

      <div className="container">
        <>
          <Swiper
            navigation={true}
            slidesPerView={1}
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
                      <Link to="/itemdetails">
                        <img src={productImg} />
                      </Link>
                    </div>

                    <div className="text">
                      <p className="product-name">{item.name}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      </div>
    </div>
  );
};
