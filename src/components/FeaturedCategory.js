import React from 'react'
import artwork from '../images/shop5.png'
import fashion from '../images/fashioncategory.png'
import book from '../images/bookcategory.png'
import food from '../images/shop1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeaturedCategory = () => {
  return (
    <div className='featured-category'
    id='featured-category'
    >
        <div className='container'>
            <div className='content'>
                <div className='top-product-header f-jc-sb'>
                    <h2>Featured Categories</h2>
                    <p>See more {'>'}</p>  
                 </div>

                 <div className='categories'>
                 <>
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                        slidesPerView: 2,
                        },
                        1024: {
                        slidesPerView: 4,
                        },
                    }}
                    className="mySwiper">
                        <SwiperSlide>
                            <div>
                                <img src={artwork}/>
                                <p>Art Works</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src={fashion}/>
                                <p>Fashion</p>
                            </div>
                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <div>
                                <img src={book}/>
                                <p>Books</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <img src={food}/>
                                <p>Foodstuffs</p>
                             </div>
                        </SwiperSlide>
                    </Swiper>
                </>
                 </div>

            </div>

        </div>
    </div>
  )
}

export default FeaturedCategory
