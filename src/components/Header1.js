import React from 'react'
import logo from '../images/logo-img.svg';
import searchIcon from '../images/search-icon.svg';
import blogIcon from '../images/blog-icon.png';
import wishlistIcon from '../images/wishlist-icon.png';
import accountIcon from '../images/account-icon.png';

const Header1 = () => {
    // handle

  return (
    <div className='header1'>
        <div className='container'>
            <div className='header f-jc-sb'>

                <div className='logo-div f-jc-sb'>
                    <img src={logo} alt='logo-image'/>

                    <p className='h-f-m'>Mazamaza</p>
                </div>

                {/* The search box area */}
                <div className='search-box h-f-dm f-jc-sb '>
                    <img src={searchIcon} alt='search-icon'/>

                    {/* this is the search box input */}
                    <input 
                    onFocus={(e) => e.target.placeholder = 'Typing...'}
                    onBlur={(e) => e.target.placeholder = 'search..'} type='text'
                    placeholder='search..'/>

                    <select>
                        <option value={'all'}>All</option>
                        <option value={'cloth'}>cloth</option>
                        <option value={'all'}>shoe</option>
                    </select>
                </div>

                {/* icons */}
                <div className='links f-jc-sb'>
                    <span className='h-f-dm'>Become a Seller</span>

                    <span><img src={accountIcon}/> <span className='h-f-tm'>Account</span></span>

                    <span><img src={wishlistIcon}/><span className='h-f-tm'>Wishlist</span></span>

                    <span><img src={blogIcon}/><span className='h-f-tm'>My Bag</span></span>
                </div>


                {/* hamburger menu button for mobile view */}
                <div className='h-f-t ham-menu-btn'>
                        <svg className="ham ham6" viewBox="0 0 100 100" width="80" >
                            <path
                                className="line top"
                                d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272" />
                            <path
                                className="line middle"
                                d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272" />
                            <path
                                className="line bottom"
                                d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272" />
                        </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header1