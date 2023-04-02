import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, createContext} from "react";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import SelectProcess from "./pages/SelectProcess";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const AppContext = createContext();



function App() {
     // state for toggling menu in mobile view
     const [hamMenu, setHamMenu] = useState(false);
     const [navigationSubPage, setNavigationSubPage] = useState([])
     const [showNavigationSubPage, setShowNavigationSubPage] = useState(false)
     // state to hide and display the sub list when the categories is hovered on
     const [showOnHover, setShowOnHover] = useState(false)
    //  to tweaking signin and signed out
     const [signedIn, setSignedIn] = useState(false);
    //  to set the sign in option to b requested
    const [signInOption, setSignInOption] = useState('phone')


  return (
    
    <AppContext.Provider 
    value={{
        setHamMenu, setNavigationSubPage, setShowNavigationSubPage, setShowOnHover, navigationSubPage, showNavigationSubPage, setShowNavigationSubPage, showOnHover, setShowOnHover, signInOption, setSignInOption,
        signedIn, setSignedIn
        }}>
    { signedIn ?
    <Router>
        <Header1/> {/*This is the first navigation bar in the page */}
        <Header2/>{/*This is the product navigation bar in the page */}
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='*' element={<HomePage/>} />
        </Routes>
    </Router> :

    <Router>
        <Routes>
        <Route path='/' element={<SelectProcess/>} /> 
        <Route path='/signin' element={<SignIn/>} /> 
        <Route path='/signup' element={<SignUp/>} /> 
        </Routes>
    </Router>
    }
    </AppContext.Provider>
  );
}

export default App;
