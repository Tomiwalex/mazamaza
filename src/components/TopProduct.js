import React, { Suspense, useState } from 'react'

const TopProduct = () => {
    const [topProducts, setTopProducts] = useState([
        {
            id: 1,
            image: 'gkjgkj',
            name: 'Genuine Pure Skin Red Hag',
            price: '$109.19'
        },
        {
            id: 2,
            image: 'gkjgkj',
            name: 'Golden Wig',
            price: '$109.19'
        },

        {
            id: 3,
            image: 'gkjgkj',
            name: 'Green Tea With Moringa',
            price: '$109.19'
        },
        {
            id: 4,
            image: 'gkjgkj',
            name: 'Alaari Dansiki Aso Oke',
            price: '$109.19'
        },
    ]);


  return (
    <div className='top-products'>
        <div className='container'>
            <div className='top-product-header f-jc-sb'>
                <h2>Top Products</h2>
                <p>See more {'>'}</p>
            </div>

            <div className='top-product-content'>
                {
                    topProducts.map((product, index) => {
                        return (
                            <Suspense key={index} fallback={'loading..'}>
                                <div>
                                    <img className='product-image' src={product.image} alt={`img of ${product.name}`}/>
                                    
                                    <p className='product-name'>{product.name}</p>

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
