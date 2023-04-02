import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-img.svg'
import downimg from '../images/downimg.png'
import { AppContext } from '../App'
import { useContext } from 'react'

const SelectProcess = () => {

  const { setSignInOption } = useContext(AppContext)
  return (
    <div className='select-process'>
        <div className='content'>
            <img src={logo}/>

            <p className='details'>Sign in to your site account</p>

            <h1>Welcome</h1>

            <Link className='button'>Sign in with Facebook</Link>
            <Link className='button'>Sign in with Google</Link>
            <Link className='button'>Sign in with Instagram</Link>
            <Link 
            to='/signin'
            onClick={() => setSignInOption('email')}
            className='button'>Sign in with Email</Link>
            <Link
            to='/signin'
             onClick={() => setSignInOption('phone')}
            className='button'>Sign in with Phone</Link>

            <hr/>

            <p className='gray'>Don't have an Account?</p>
            <span> <Link className='green'>Forget Password</Link></span>
            <span> <Link to='/signup' className='green'>Register Now</Link> </span>

            <img className='down-image' src={downimg}/>

            <p className='gray'>Copywrite 2023 Mazamaza Stores All rights reserved. <span className='green'>User agreement, privacy</span> and  <span>Cookies</span></p>
        </div> 
    </div>
  )
}

export default SelectProcess
