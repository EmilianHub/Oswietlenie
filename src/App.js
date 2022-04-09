import './components/Sidebar.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Rejestr";
import OswietleniePage from "./pages/OswietleniePage"

function App() {
  return (
      <div className="App">
        <Router>
          <Sidebar/>
          <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Oswietlenie" element={<OswietleniePage/>}/>
            <Route path="/Logout" element={<Login/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
