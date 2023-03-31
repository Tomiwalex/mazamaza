import React from 'react'
import bags from '../images/categorybagimage.png'
import shoes from '../images/categoryshoeimage.png'
import skinCare from '../images/categoryskincareimage.png'
import art from '../images/categoryartimage.png'

const PopularProduct = () => {
  return (
    <div className='popular-products '>
        <div className='container'>
            <div className='product'>
                <div className='top-product-header f-jc-sb'>
                    
                    <h2>Popular Products</h2>
                    <p>See more {'>'}</p>
                    
                </div>

                <div className='product-content'>
                    <div className='category'>
                        <img src={bags} alt='bags'/>
                        <p>Bags</p>
                    </div>

                    <div className='category'>
                        <img src={shoes} alt='shoes'/>
                        <p>Shoes and Accessories</p>
                    </div>

                    <div className='category'>
                        <img src={skinCare} alt='skin-care'/>
                        <p>Skin Care Products</p>
                    </div>

                    <div className='category'>
                        <img src={art} alt='art'/>
                        <p>Arts</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PopularProduct
