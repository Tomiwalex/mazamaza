// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import products from '../json/products.json';
import productImg from '../images/productimg.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper";




export const BestBuy = () => {
    return (
        <div className="trending-products top-products slider-type-1">
            <div 
            style={{background:'none'}}
            className='top-product-header '>
                <div className='container f-jc-sb'
                style={{color:'black'}}
                >
                    <h2>Best Buy</h2>
                    <p>See more {'>'}</p>
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
                    {
                        products.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="content">
                                        <div className="img">
                                            <img src={productImg}/>
                                        </div>

                                        <div className="text">
                                            <p className="product-name">{item.name}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                </>
            </div>
        </div>
    )
}