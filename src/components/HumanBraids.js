import React from 'react'
import products from '../json/products.json';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HumanBraids = () => {
  return (
    <div className='popular-shops'>
      <div className='container'>
        <div className='shop'>
            <div className='top-product-header f-jc-sb'>
                <h2>Human Braids</h2>
                <p>See more {'>'}</p>  
             </div>

             <div className='shop-content'>
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
                 className="mySwiper">
                
                    {/* getting the popularshop list from popularshops.json and mapping through the array */}
                    {
                        products.map((shop, index) => {
                            return (
                                <SwiperSlide
                                    key={index}
                                >
                                    <div  className='popular-shop'>
    
                                        <img 
                                        src={require('../images/braided.png')}/>
                                        <p>{shop.name}</p>
                                        <p>{shop.price}</p>

                                        {/* {p * shop.star} */}

                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </>
             </div>
        </div>
      </div>
    </div>
  )
}

export default HumanBraids
