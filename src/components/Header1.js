import React, { useState } from "react";
import logo from "../images/logo-img.svg";
import searchIcon from "../images/search-icon.svg";
import blogIcon from "../images/blog-icon.svg";
import wishlistIcon from "../images/wishlist-icon.svg";
import accountIcon from "../images/account-icon.svg";
import backIcon from "../images/back-arrow.svg";
import { AppContext } from "../App";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header1 = () => {
  // handle
  const [mobilesearch, setMobilesearch] = useState(false);

  const {
    hamMenu,
    setHamMenu,
    setShowNavigationSubPage,
    showNavigationSubPage,
    user,
    searchItem,
    setSearchItem,
    cartItem,
    scrolled,
  } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <div className={scrolled ? "header1 header-fixed" : "header1"}>
      <div className="container">
        <div className="header f-jc-sb">
          <Link to="/home">
            <div className="logo-div f-jc-sb">
              <img src={logo} alt="logo-image" />

              <p className="h-f-m">Mazamaza</p>
            </div>
          </Link>

          {/* The search box area */}
          <div
            className={
              mobilesearch
                ? "search-box f-jc-sb fade-in"
                : "search-box f-jc-sb fade-out"
            }
          >
            <img src={searchIcon} alt="search-icon" />

            {/* this is the search box input */}
            <form onSubmit={(e) => navigate("../product")}>
              <input
                onSubmit={(e) => {
                  navigate("../product");
                  setSearchItem(e.target.value);
                }}
                onChange={(e) => setSearchItem(e.target.value)}
                onFocus={(e) => (e.target.placeholder = "Typing...")}
                onBlur={(e) => (e.target.placeholder = "search..")}
                type="text"
                placeholder="search.."
              />
            </form>

            {/* selecting categories */}
            <select>
              <option value={"all"}>All</option>
              <option value={"cloth"}>cloth</option>
              <option value={"all"}>shoe</option>
            </select>
          </div>

          {/* icons */}
          {/* /* This code is rendering a section of icons and links in the header of a website. It
          includes a search icon that toggles a search box when clicked, a "Become a Seller" or "Go
          to Shop" link depending on whether the user is a seller or not, and two more icons for
          Wishlist and My Bag. */}
          <div className="links f-jc-sb">
            {!user?.isSeller ? (
              <span
                className="h-f-dm"
                onClick={(e) => {
                  navigate("seller-signup");
                }}
              >
                Become a Seller
              </span>
            ) : (
              <span
                className="h-f-dm"
                onClick={(e) => {
                  navigate("../seller-signup");
                }}
              >
                Go to Shop
              </span>
            )}

            {/* icons */}
            <div className="links f-jc-sb">
              {/* search button icon to be shown on mmobile */}
              <span
                className="h-f-d search-icon"
                onClick={() => (
                  setMobilesearch(!mobilesearch), setHamMenu(false)
                )}
              >
                <img src={searchIcon} alt="search-icon" />
              </span>

              {/* account icon */}
              <span>
                <img className="img1" src={accountIcon} />{" "}
                <span
                  className="h-f-tm"
                  onClick={(e) => (user ? null : navigate("../signin"))}
                >
                  {user?.firstName || "Account"}
                </span>
              </span>

              {/* wishlist icon */}
              <Link to="/product">
                <span>
                  <img src={wishlistIcon} />
                  <span className="h-f-tm">Wishlist</span>
                </span>
              </Link>

              {/* cart icon */}
              <span>
                <span
                  style={{
                    position: "relative",
                  }}
                >
                  <Link to="/cart">
                    <img src={blogIcon} />
                    {cartItem.length > 0 && (
                      <span
                        className="f-jc-c"
                        style={{
                          position: "absolute",
                          height: "9px",
                          width: "9px",
                          top: "-7px",
                          left: "12px",
                          fontSize: "9px",
                          padding: "3px",
                          color: "black",
                          borderRadius: "50%",
                          fontWeight: 500,
                          background: "#FDC50D",
                        }}
                      >
                        {" "}
                        {cartItem.length}
                      </span>
                    )}
                    <span className="h-f-tm">My Bag</span>
                  </Link>
                </span>
              </span>
            </div>

            {/* hamburger menu button for showing the mnu list on mobile view */}
            {!showNavigationSubPage && (
              <div className="h-f-t ham-menu-btn">
                <svg
                  className={hamMenu ? "ham ham6 active" : "ham ham6"}
                  viewBox="0 0 100 100"
                  width="80"
                  onClick={() => {
                    setHamMenu(!hamMenu);
                  }}
                >
                  <path
                    className="line top"
                    d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
                  />
                  <path
                    className="line middle"
                    d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
                  />
                  <path
                    className="line bottom"
                    d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
                  />
                </svg>
              </div>
            )}

            {/* button to hide the sublist menu on mobile */}
            {/* /* This code is rendering an image of a back arrow icon only if the `showNavigationSubPage`
           {/* state is true. When the back arrow icon is clicked, it sets the `showNavigationSubPage`
           state to false. This is used to show and hide a sublist menu on mobile view. */}
            {showNavigationSubPage && (
              <img
                onClick={() => setShowNavigationSubPage(false)}
                className="h-f-t"
                src={backIcon}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
