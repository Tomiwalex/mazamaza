import React from "react";
import './scss/general.css'
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";


function App() {
  return (
    <div className="App">
       <Header1/> {/*This is the first navigation bar in the page */}
       <Header2/>{/*This is the bar navigation bar in the page */}
    </div>
  );
}

export default App;
