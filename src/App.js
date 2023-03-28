import React from "react";
import './scss/general.css'
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Hero from "./components/Hero";

import { useState } from "react";
import TopProduct from "./components/TopProduct";


function App() {
    // state for toggling menu in mobile view
    const [hamMenu, setHamMenu] = useState(false);

  return (
    <div className="App">
       <Header1 hamMenu={hamMenu} setHamMenu={setHamMenu}/> {/*This is the first navigation bar in the page */}

       <Header2 hamMenu={hamMenu}/>{/*This is the bar navigation bar in the page */}

       <Hero/>
       <TopProduct/>
    </div>
  );
}

export default App;
