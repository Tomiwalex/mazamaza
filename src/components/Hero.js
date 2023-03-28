import React from 'react';
import heroImg from '../images/hero-img.png';
import arrowIcon from '../images/arrow-icon.png';

const Hero = () => {
  return (
    <div className='hero1 heros'>
        <div className='container'>
            <div className='hero f-jc-sb'>
                <div className='text'>
                  <h1>Hunger Killer</h1>

                  <button className='f-jc-sb'>Shop Now <img src={arrowIcon}/></button>
                </div>

                <div className='image'>
                   <img alt='image is coming soon'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;
