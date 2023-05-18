import React, { useEffect } from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import SelectProcess from "./pages/SelectProcess";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useCheckToken } from "./hooks/checkToken";
import SellerSignUp from "./pages/SellerSignup";
import axios from "axios";
import SignUpSuccessful from "./pages/SignUpSuccessful";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import CartItem from "./components/cart/CartItem";
import ItemDetails from "./pages/ItemDetails";
import Checkout from "./pages/Checkout";
import FeaturedProductPage from "./pages/FeaturedProductPage";
import ContactUs from "./pages/ContactUs";
import Announcement from "./components/Announcement";
import OrderSuccessful from "./pages/OrderSuccessful";
import Account from "./pages/Account";

export const AppContext = createContext();
function App() {
  // state for toggling menu in mobile view
  const [hamMenu, setHamMenu] = useState(false);

  const [navigationSubPage, setNavigationSubPage] = useState([]);
  const [showNavigationSubPage, setShowNavigationSubPage] = useState(false);

  // state to hide and display the sub list when the categories is hovered on
  const [showOnHover, setShowOnHover] = useState(false);

  //  to tweaking signin and signed out
  const [signedIn, setSignedIn] = useState(true);

  //  to set the sign in option to b requested
  const [signInOption, setSignInOption] = useState("email");
  const [user, setuser] = useState();

  // state for storing cart items
  const [cartItem, setCartItem] = useState([]);

  // state for storing the general product page heading
  const [productHeading, setProductHeading] = useState("");

  // state to toggle the variuos tabs in the account page
  const [activeTab, setActiveTab] = useState("account");

  // function for handling the add to cart feature
  const handleAddtoCart = async (item) => {
    // const newItem = {
    //   ...item,
    //   cartId:
    //     cartItem.length === 0 ? 1 : cartItem[cartItem.length - 1].cartId + 1,
    // };
    // const newList = [...cartItem, newItem];

    try {
      console.log(window.localStorage.getItem("authToken"));
      const response = await axios.put(
        `https://mazamaza.onrender.com/api/cart/addToCart?productId=${item._id}`,
        {
          headers: {
            "x-auth-token": window.localStorage.getItem("authToken"),
          },
        }
      );
      if (response) {
        console.log(response.data.cart);
        setCartItem(response.data.cart);
        alert("Added to Cart");
      }
    } catch (error) {
      alert("could not add product to cart");
      console.log(error);
    }
  };

  // #########################
  // function for deleting cart item
  const handleCartItemDelete = (cartId) => {
    const newList = cartItem.filter((item) => {
      return item.cartId !== cartId;
    });
    setCartItem(newList);
  };

  const [scrolled, setScrolled] = useState(false);

  {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 45 ||
        document.documentElement.scrollTop > 45
      ) {
        setScrolled(true);
        console.log("scroled");
      } else {
        setScrolled(false);
      }
    };
  }

  // state for storing searched item
  const [searchItem, setSearchItem] = useState("");

  // useCheckToken((e)=>setSignedIn(true),(e)=>setSignedIn(false))

  const getUser = async () => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get(
        "https://mazamaza.onrender.com/api/users/user",
        {
          headers: {
            "x-auth-token": `${token}`,
          },
        }
      );
      if (response) {
        setuser(response.data);
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [signedIn]);

  return (
    <AppContext.Provider
      value={{
        hamMenu,
        setHamMenu,
        setuser,
        user,
        setNavigationSubPage,
        setShowNavigationSubPage,
        setShowOnHover,
        navigationSubPage,
        showNavigationSubPage,
        setShowNavigationSubPage,
        showOnHover,
        setShowOnHover,
        signInOption,
        setSignInOption,
        signedIn,
        setSignedIn,
        searchItem,
        setSearchItem,
        cartItem,
        setCartItem,
        handleAddtoCart,
        handleCartItemDelete,
        productHeading,
        setProductHeading,
        scrolled,
        setScrolled,
        activeTab,
        setActiveTab,
      }}
    >
      {signedIn ? (
        <Router>
          {/* <Announcement /> */}
          <Announcement />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/seller-signup" element={<SellerSignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product" element={<Product />} />
            <Route path="/itemdetails" element={<ItemDetails />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/featuredproduct" element={<FeaturedProductPage />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/Ordersuccess" element={<OrderSuccessful />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<SelectProcess />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signupsuccessful" element={<SignUpSuccessful />} />
          </Routes>
        </Router>
      )}
    </AppContext.Provider>
  );
}

export default App;
