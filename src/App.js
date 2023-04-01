import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='*' element={<h1>page not found</h1>} />
            </Routes>
    </Router>
    
  );
}

export default App;
