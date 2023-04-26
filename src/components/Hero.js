import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
import Hero1 from "../images/ban1d.svg";
import Hero2 from "../images/ban2d.svg";
import Hero3 from "../images/ban3d.svg";
import Hero4 from "../images/ban4d.svg";
import Hero5 from "../images/ban5d.svg";
import Hero1m from "../images/herobanner1mobile.svg";
import Hero2m from "../images/herobanner2mobile.svg";
import Hero3m from "../images/ban3m.svg";
import Hero4m from "../images/ban4m.svg";
import Hero5m from "../images/ban5m.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heros">
      <div>
        <>
          <Swiper
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {/* /* Creating a series of slides for a Swiper component, each containing an image component
            (Hero1, Hero2, etc.). The Swiper component will display these slides in a slideshow
          format with pagination and autoplay enabled. */}
            <SwiperSlide>
              <Link to="/product">
                <img className="h-f-dm" src={Hero1} alt="img" />
                <img className="h-f-t" src={Hero1m} alt="img" />
              </Link>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/product">
                <img className="h-f-dm" src={Hero2} alt="img" />
                <img className="h-f-t" src={Hero2m} alt="img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <img className="h-f-dm" src={Hero3} alt="img" />
                <img className="h-f-t" src={Hero3m} alt="img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <img className="h-f-dm" src={Hero4} alt="img" />
                <img className="h-f-t" src={Hero4m} alt="img" />
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/product">
                <img className="h-f-dm" src={Hero5} alt="img" />
                <img className="h-f-t" src={Hero5m} alt="img" />
              </Link>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Hero;
