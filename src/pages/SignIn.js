import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/logo-img.svg'
import downimg from '../images/downimg.png'
import { useContext } from 'react'
import { AppContext } from '../App'
import axios from 'axios'
// import { useCheckToken } from '../hooks/checkToken'

const SignIn = () => {
  const { signInOption, setSignedIn } = useContext(AppContext)
  const navigate = useNavigate()


  const handleSignin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()),e.target);
  
    try {
      const response = await axios.post('http://localhost:4000/api/users/login', Object.fromEntries(formData.entries()));
      if (response) {
        console.log(response.data);
        localStorage.setItem('authToken',response.data.token)
        alert(response.data.message)
        setSignedIn(true);
        navigate('../home')
      
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message)
    }
  };

  return (
    <div className='signin select-process'>
        <div className='content'>
            <img src={logo}/>

            <h1>Welcome!</h1>

            <form 
            onSubmit={(e) => handleSignin(e) }
            >
                {
                  signInOption == 'email' &&
                  <input name='emailOrUsername' placeholder='Username or Email' type='text' required/>
                }

                {
                  signInOption == 'phone' &&
                  <input name='phone' placeholder='phone' type='tel' required/>
                }
                
                <input name='password' placeholder='password' type='password' required/>

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
