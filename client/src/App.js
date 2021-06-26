import React, { useState, useEffect} from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./components/pages/Home/Home";
import NavMenu from "./components/NavMenu/NavMenu";
function App() {

  // useState, useEffect, etc. 
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  //return code here
  return (<>
   <div className="app">
      <NavMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className="sections">
      <Home />
     </div>    
    </div>
  </>);
}

export default App;
