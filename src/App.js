import './components/Sidebar.css';
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Logout from './components/Logout'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Rejestr";
import OswietleniePage from "./pages/OswietleniePage"

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
              <Route path="/Home" element={<Home/>}/>
              <Route path="/" element={<Login/>}/>
              <Route path="/Register" element={<Register/>} />
              <Route path="/Oswietlenie" element={<OswietleniePage/>}/>
              <Route path="/Logout" element={<Logout/>}/>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
