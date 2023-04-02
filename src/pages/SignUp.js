import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-img.svg'
import google from '../images/signupgoogle.png'
import facebook from '../images/signupfacebook.png'
import Instagram from '../images/signupinstagram.png'
import hero from '../images/signupbuyer.png'
import heroseller from '../images/signupseller.png'
import { useState } from 'react'
import { AppContext } from '../App'
import { useContext } from 'react'


const SignUp = () => {

    const { setSignedIn } = useContext(AppContext)

    // state for displaying the required field forms for buyer and seller
    const [signupForm, setSignupForm] = useState('buyer')

  return (
    <div className='signup'>
        <div className='content f-jc-sb'>
            <div className='image' style={{background: signupForm == 'buyer' ? `url(${hero})` : `url(${heroseller})`}}>
                {/* <img src={hero}/> */}
            </div>

            <div className='text'>
                <img className='logo' src={logo}/>

                <div className='switch f-jc-sb'>
                    <p 
                    onClick={() => setSignupForm('buyer')}
                    className={signupForm == 'buyer' && 'p-active'}
                    >Buyer</p>

                    <p
                    onClick={() => setSignupForm('seller')}
                    className={signupForm == 'seller' && 'p-active'}
                    >Business/Seller</p>
                </div>

                <form onSubmit={() => setSignedIn(true)}>
                    {
                        signupForm == 'seller' && <div>
                        <input type='text' placeholder='Shop Name' required/>
                        <input type='text' placeholder='Legal Business Email' required/>
                        </div>
                    }
                    
                    {
                        signupForm == 'buyer' && <div>
                            <input type='text' placeholder='Full name' required/>
                            <input type='text' placeholder='Username' required/>
                            <input type='email' placeholder='Email' required/>
                        </div>
                    }

                    <input type='password' placeholder='Password' required/>
                    <input type='password' placeholder='Confirm Password' required/>
                    
                    <div className='check-boxes f-jc-sb'>
                        <input type='checkbox'/>
                        <p>I agree to the
                        <Link className='red'>Terms & Conditions</Link> and <Link className='red'>Privacy Policy</Link></p>
                    </div>

                    <input type='submit' value='Register'/>
                </form>

                <p className='gray'>By Registering, you agree to <span className='green'>MazaMaza User Agreement</span> and  <span className='green'>Cookies & Internet Advertising.</span></p>

                <div className='or f-jc-sb'>
                    <span></span>
                    <small>or</small>
                    <span></span>
                </div>

                <div className='f-jc-sb icon'>
                    <img src={google}/>
                    <img src={facebook}/>
                    <img src={Instagram}/>
                </div>

                <p className='gray'>
                Already have an Account? <Link className='green' to='/signin'><span>Sign In</span></Link>
                </p>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
