import React from 'react';
import heroImg from '../images/hero-img.png';
import arrowIcon from '../images/arrow-icon.svg';

const Hero = ({ background, heroh1Small, h1color, buttoncolor, color }) => {
  return (
    <div className={`hero1 ${heroh1Small} heros`}
    style={{background: background}}
    >
        <div className='container'>
            <div className='hero f-jc-sb'>
                <div className='text'>
                  <h1
                  style={{color: h1color}}
                  >Hunger Killer</h1>

                  <button 
                  style={{backgroundColor: buttoncolor, color:color
                  }}
                  className='f-jc-sb'>Shop Now <img src={arrowIcon}/></button>
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
