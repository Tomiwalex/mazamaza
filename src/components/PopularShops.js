import React, { useEffect, useState } from "react";
import popularShop from "../json/popularShops.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppContext } from "../App";
import { useContext } from "react";
import itemimg from "../images/shop1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import Lottie from "react-lottie";
import emptyStore from "../assets/lottie/emptyStore.json";

const PopularShops = () => {
  const { setProductHeading } = useContext(AppContext);
  const [popularShops, setPopularShops] = useState([]);
  const getPopularShops = async () => {
    try {
      const response = await axios.get(
        `https://mazamaza.onrender.com/api/seller/shops/filter?sort=rating`,
        {
          headers: {
            "x-auth-token": localStorage.getItem("authToken"),
          },
        }
      );
      if (response) {
        setPopularShops(response.data.data);
        console.log(response.data.data);
      }
    } catch (error) {
      // alert('could not load products in this category')
      console.log(error);
    }
  };

  useEffect(() => {
    getPopularShops();
  }, []);

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
                {popularShops.length > 0 ? (
                  popularShops.map((shop, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="popular-shop">
                          <Link to="/itemdetails">
                            <img src={shop.shopLogoUrl || itemimg} onError={e=>{e.currentTarget.src=itemimg}} />
                          </Link>
                          <p>{shop?.seller?.shopName.toUpperCase()}</p>

                          {/* {p * shop.star} */}
                        </div>
                      </SwiperSlide>
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
                        animationData: emptyStore,
                        loop: true,
                      }}
                      width={200}
                    />
                    <p className="m-4">Shops are not available</p>
                  </div>
                )}
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularShops;
