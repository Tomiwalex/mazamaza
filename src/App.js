import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useState, createContext} from "react";
import SelectProcess from "./pages/SelectProcess";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpSuccessful from "./pages/SignUpSuccessful";
import Cart from "./pages/Cart";

export const AppContext = createContext();



function App() {
     // state for toggling menu in mobile view
     const [hamMenu, setHamMenu] = useState(false);
     const [navigationSubPage, setNavigationSubPage] = useState([])
     const [showNavigationSubPage, setShowNavigationSubPage] = useState(false)
     // state to hide and display the sub list when the categories is hovered on
     const [showOnHover, setShowOnHover] = useState(false)
    //  to tweaking signin and signed out
     const [signedIn, setSignedIn] = useState(true);
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
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
    </Router> :

    <Router>
        <Routes>
        <Route path='/' element={<SelectProcess/>} /> 
        <Route path='/signin' element={<SignIn/>} /> 
        <Route path='/signup' element={<SignUp/>} /> 
        <Route path='/signupsuccessful' element={<SignUpSuccessful/>} /> 
        </Routes>
    </Router>
    }
    </AppContext.Provider>
  );
}

export default App;
