import React from 'react'
import Categorypop from '../components/Categorypop'
import CartItem from '../components/cart/CartItem'
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";

const Cart = () => {
  return (
    <div className='carts'>
    <Header1/>
    <Header2/>
    <Categorypop/>{/*the category section pop up */}

        <div className='container'>
            
            <div className='cart'>
            <h2>My Bag</h2>

                <div className='cart-content'>
                    <CartItem
                    productName={'Nice WIne Bag'} 
                    productPrice={'$2,400'}
                    productCondition={'new'}
                    />

                    <CartItem
                    productName={'corn flakes'} 
                    productPrice={'$300'}
                    productCondition={'new'}
                    />
                </div>

                {/* The cart summary */}
                <div className='cart-summary'>
                    <h3>Cart Summary</h3>
                    <hr/>

                    <div className='sub-total f-jc-sb'>
                        <p>Subtotal</p>
                        <p className='sub-total-price'> US $24,040</p>
                    </div>

                    <div className='shipping f-jc-sb'>
                        <p>Shipping</p>
                        <p className='shipping-price'> US $24.04</p>
                    </div>

                    <div className='discount shipping f-jc-sb'>
                        <p>Discount</p>
                        <p className='discount-price'> US $2,040</p>
                    </div>
                    
                    <div className='estimated-tax shipping f-jc-sb'>
                        <p>Estimated Tax</p>
                        <p className='tax-price'>-</p>
                    </div>

                    <hr/>

                    <div className='total f-jc-sb'>
                        <h3>Total</h3>
                        <h3>US $11,234.56</h3>
                    </div>

                    <button>Proceed to checkout</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart
