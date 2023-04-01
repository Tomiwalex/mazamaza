import React from 'react'
import arrowIcon from '../../images/arrow-icon.svg';
import heroimg from '../../images/hero2img.png';


const Hero2 = () => {
  return (
    <div className='heros hero2'>
        <div className='Container'>
            <div className='hero f-jc-sb'>
                <div className='text'>
                    <h1>
                        Unleash your Inner Fashionista with our Latest Arrivals!
                    </h1>

                    <button 
                        className='f-jc-sb'>Shop Now 
                        <img src={arrowIcon}/>
                    </button>
                </div>
                <div className='image'>
                    <img src={heroimg}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero2
