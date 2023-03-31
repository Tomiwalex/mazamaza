import React from 'react';
import heroImg from '../images/hero-img.png';
import arrowIcon from '../images/arrow-icon.svg';

const Hero = ({ background, h1font }) => {
  return (
    <div className='hero1 heros'
    style={{background: background}}
    >
        <div className='container'>
            <div className='hero f-jc-sb'>
                <div className='text'>
                  <h1
                  style={{fontSize: h1font}}
                  >Hunger Killer</h1>

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
