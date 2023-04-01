import React from "react";
import './scss/general.css'
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import { useState } from "react";
import TopProduct from "./components/TopProduct";
import Categorypop from "./components/Categorypop";
import { TrendingProduct } from "./components/TrendingProduct";
import PopularProduct from "./components/PopularProduct";
import PopularShops from "./components/PopularShops";
import FeaturedCategory from "./components/FeaturedCategory";
import FashionHair from "./components/FashionHair";
import BestSellers from "./components/BestSellers";
import NewArrivals from "./components/NewArrivals";
import { FashionTrend } from "./components/FashionTrend";
import BroadWay from "./components/BroadWay";
import SuperShop from "./components/SuperShops";
import { BestBuy } from "./components/BestBuy";
import HumanBraids from "./components/HumanBraids";
import SweetHome from "./components/SweetHome";
import Reviews from "./components/Reviews";
import LatestBlog from "./components/LatestBlog";
import Footer from "./components/Footer";


const HaomePage = () => {
    // state for toggling menu in mobile view
    const [hamMenu, setHamMenu] = useState(false);
    const [navigationSubPage, setNavigationSubPage] = useState([])
    const [showNavigationSubPage, setShowNavigationSubPage] = useState(false)

    // state to hide and display the sub list when the categories is hovered on
    const [showOnHover, setShowOnHover] = useState(false)


  return (
    <div>
       <Header1 hamMenu={hamMenu} setHamMenu={setHamMenu}
       setShowNavigationSubPage={setShowNavigationSubPage}
       showNavigationSubPage={showNavigationSubPage}
       /> {/*This is the first navigation bar in the page */}

       <Header2 hamMenu={hamMenu}
       navigationSubPage={navigationSubPage}
       setNavigationSubPage={setNavigationSubPage}
       showNavigationSubPage={showNavigationSubPage}
       setShowNavigationSubPage={setShowNavigationSubPage}
       showOnHover={showOnHover}
       setShowOnHover={setShowOnHover}
       />{/*This is the product navigation bar in the page */}

       <Categorypop
        navigationSubPage={navigationSubPage}
        setNavigationSubPage={setNavigationSubPage}
        showNavigationSubPage={showNavigationSubPage}
        setShowNavigationSubPage={setShowNavigationSubPage}
        showOnHover={showOnHover}
        setShowOnHover={setShowOnHover}
       />{/*the category section pop up */}

       <Hero background={'#6ACC1A'}/>
       <TopProduct/>
       <TrendingProduct/>
       <Hero 
       background={'#FDC50D'}
       heroh1Small={'hero-small'}
       h1color={'white'}
       />
       <PopularProduct/>
       <PopularShops/>
       <Hero 
       background={'#F4F5F9'}
       heroh1Small={'hero-small'}
       h1color={'black'}
       buttoncolor={'#03750D'}
       color={'white'}
       />
       <FeaturedCategory/>
       <FashionHair/>
       <Hero 
       background={'#F4F5F9'}
       heroh1Small={'hero-small'}
       h1color={'black'}
       buttoncolor={'#03750D'}
       color={'white'}
       />
       <NewArrivals/>
       <BestSellers/>
       <FashionTrend/>
       <Hero 
        background={'#F4F5F9'}
        heroh1Small={'hero-small'}
        h1color={'black'}
        buttoncolor={'#03750D'}
       color={'white'}
       />
       <BroadWay/>
       <SuperShop/>
       <BestBuy/>
       <HumanBraids/>
       <SweetHome/>
       <Reviews/>
       <LatestBlog/>
       <Footer/>
    </div>
  );
}

export default HaomePage;
