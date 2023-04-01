import React from 'react'
import arrowIcon from '../../images/arrow-icon.svg';
import heroimg from '../../images/hero5img.png';


const Hero5 = () => {
  return (
    <div className='heros hero5'>
        <div className='Container'>
            <div className='hero f-jc-sb'>
                <div className='image'>
                    <img src={heroimg}/>
                </div>
                <div className='text'>
                    <h1>
                     Discover a New Way to Shop
                    </h1>
                    <p>Find Your Perfect Match Today!</p>

                    <button 
                        className='f-jc-sb'>Shop Now 
                        <img src={arrowIcon}/>
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Hero5
