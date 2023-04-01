import React from 'react'
import logo from '../images/footerlogo.svg'
import { Link } from 'react-router-dom'
import twitter from '../images/twitter.png'
import facebook from '../images/facebook.png'
import linkedin from '../images/linkedin.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'

const Footer = () => {
  return (
    <div className='footers'>
        <div className='container'>
            <div className='footer'>
                <div className='div1'>
                    <img src={logo}/>
                    <a href='tel:+2349169365132' target='_blank'>
                    +2349169365132
                    </a>
                    <a href='mailto:info@mazamazastores.com' target='_blank'>
                        info@mazamazastores.com
                    </a>
                </div>

                <div className='div2'>
                    <h2>QUICK LINKS</h2>
                    <Link to='/#featured-category'>Featured Products</Link>
                    <Link to='/#featured-shops'>featured Shops</Link>
                    <Link to='/#top-brands'>Top Brands</Link>
                    <Link to=''>Trending Products</Link>
                    <Link to=''>Clearance Sale</Link>
                    <Link to=''>Sitemap</Link>
                </div>

                <div className='div3'>
                <h2>Sell with Us</h2>
                <Link to=''>Become a Seller</Link>
                <Link to=''>Advertise with Us</Link>
                <Link to=''>Affiliates</Link>
                </div>

                <div className='div4'>
                <h2>Get to Know Us</h2>
                <Link to=''>FAQs</Link>
                <Link to=''>Blog</Link>
                <Link to=''>Privacy Policies</Link>
                <Link to=''>Contact Us</Link>
                </div>

                <div className='div5'>
                <h2>Social Media</h2>

                    <a className='f-jc-sb'>
                        <img src={instagram}/>
                        <p>Mazamaza instagram</p>
                    </a>

                    <a className='f-jc-sb'>
                        <img src={facebook}/>
                        <p>Mazamaza facebook</p>
                    </a>
                    
                    <a className='f-jc-sb'>
                        <img src={twitter}/>
                        <p>Mazamaza twitter</p>
                    </a>

                    <a className='f-jc-sb'>
                        <img src={youtube}/>
                        <p>Mazamaza youtube</p>
                    </a>

                    <a className='f-jc-sb'>
                        <img src={linkedin}/>
                        <p>Mazamaza linkedin</p>
                    </a>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default Footer
