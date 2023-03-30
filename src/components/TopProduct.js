import React, { Suspense, useState } from 'react'
import products from '../json/products.json';
import productImg from '../images/productimg.png'

const TopProduct = () => {
    const [topProducts, setTopProducts] = useState(products);


  return (
    <div className='top-products'>
        <div className='top-product-header '>
            <div className='container f-jc-sb'>
                <h2>Top Products</h2>
                <p>See more {'>'}</p>
            </div>
        </div>

        <div className='container'>
            <div className='top-product-content f-jc-sb'>
                {
                    topProducts.map((product, index) => {
                        return (
                            <Suspense key={index} fallback={'loading..'}>
                                <div className='product'>
                                     <img className='product-image' 
                                     //src={product.image}
                                    //  the real image should be added to the src above
                                    src={productImg}
                                     alt={`img of ${product.name}`}/> 
                                    
                                    <p className='product-name'>{product.name}</p>

                                    {/* the product's price */}
                                    <p className='product-price'>{product.price}</p>

                                </div>
                            </Suspense>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default TopProduct
