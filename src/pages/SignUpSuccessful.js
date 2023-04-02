import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import status from '../images/Status.png'

const SignUpSuccessful = () => {
  return (
    <div className='signupsuccess'>
        <div className='content'>
            <img src={status}/>
            <h1>
                Congratulations!!
            </h1>

            <p>
            Success User Sign-up Email Verification Pending
            </p>

            <Link to='/signin'>Login to your Account</Link>
        </div>
        <Footer/>
    </div>
  )
}

export default SignUpSuccessful
