import React from "react";
import './scss/general.css'
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Hero from "./components/Hero";
import { useState } from "react";
import TopProduct from "./components/TopProduct";
import Categorypop from "./components/Categorypop";
import { TrendingProduct } from "./components/TrendingProduct";


function App() {
    // state for toggling menu in mobile view
    const [hamMenu, setHamMenu] = useState(false);
    const [navigationSubPage, setNavigationSubPage] = useState([])
    const [showNavigationSubPage, setShowNavigationSubPage] = useState(false)

    // state to hide and display the sub list when the categories is hovered on
    const [showOnHover, setShowOnHover] = useState(false)


  return (
    <div className="App">
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
       h1font={70}
       />

    </div>
  );
}

export default App;
