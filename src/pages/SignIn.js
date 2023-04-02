import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-img.svg'
import downimg from '../images/downimg.png'
import { useContext } from 'react'
import { AppContext } from '../App'

const SignIn = () => {
  const { signInOption, setSignedIn } = useContext(AppContext)

  return (
    <div className='signin select-process'>
        <div className='content'>
            <img src={logo}/>

            <h1>Welcome!</h1>

            <form 
            onSubmit={() => setSignedIn(true)}
            >
                {
                  signInOption == 'email' &&
                  <input placeholder='Username or Email' type='text' required/>
                }

                {
                  signInOption == 'phone' &&
                  <input placeholder='phone' type='tel' required/>
                }
                
                <input placeholder='password' type='password' required/>

                <input type='submit' value='Sign In' />
            </form>

            <hr/>

            <p className='gray'>
              Don't have an Account?
            </p>
            
            <span> <Link className='green'>Forget Password</Link></span>
            <span> <Link to='/signup' className='green'>Register Now</Link> </span>

            <img className='down-image' src={downimg}/>

            <p className='gray'>Copywrite 2023 Mazamaza Stores All rights reserved. <span className='green'>User agreement, privacy</span> and  <span>Cookies</span></p>

        </div>
    </div>
  )
}

export default SignIn
