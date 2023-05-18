import React from "react";
import "./scss/general.css";
import Hero from "./components/Hero";
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
import Hero1 from "./components/Heros/Hero1";
import Hero2 from "./components/Heros/Hero2";
import Hero3 from "./components/Heros/Hero3";
import Hero4 from "./components/Heros/Hero4";
import Hero5 from "./components/Heros/Hero5";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Announcement from "./components/Announcement";
import VideoPopUp from "./components/video/VideoPopUp";

const HomePage = () => {
  return (
    <div>
      <Header1 /> {/*This is the first navigation bar in the page */}
      <Header2 />
      {/*This is the product navigation bar in the page */}
      <Categorypop />
      {/*the category section pop up */}
      <VideoPopUp />
      <Hero />
      <TopProduct />
      <TrendingProduct />
      <Hero2 />
      <PopularProduct />
      <PopularShops />
      <Hero4 />
      <FeaturedCategory />
      <FashionHair />
      <Hero3 />
      <NewArrivals />
      <BestSellers />
      <FashionTrend />
      <Hero1 />
      <BroadWay />
      <SuperShop />
      <BestBuy />
      <HumanBraids />
      <SweetHome />
      <Reviews />
      <LatestBlog />
      <Hero5 />
      <Footer />
    </div>
  );
};

export default HomePage;
