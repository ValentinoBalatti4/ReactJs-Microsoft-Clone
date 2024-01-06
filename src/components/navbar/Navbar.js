import React, {useState} from "react";
import microsofofLogo from "./assets/microsoft-logo.png";
import "./Navbar.css";

function Navbar() {
  const [searchActive, setSearchActive] = useState(false);

  const toogleSearch = () => {
    setSearchActive(!searchActive);
  }

  return (
    <nav className="navbar-container">
      <div className="left-container">
        <div className="logo-container">
            <img src={microsofofLogo} alt="Microsoft-logo"/>
        </div>
        <div className="menu-span-container">
          <span class="material-symbols-outlined">menu</span>
        </div>
          <div className="links-container">
            <a className="link-item">Microsoft 365</a>
            <a className="link-item">Teams</a>
            <a className="link-item">Copilot</a>
            <a className="link-item">Windows</a>
            <a className="link-item">Teams</a>
            <a className="link-item">Xbox</a>
            <a className="link-item">Deals</a>
            <a className="link-item">Support</a>
          </div>
      </div>
        <div className="right-container">
          {searchActive && (
            
            <form className="search-container">
              <input className="search-input" type="text" placeholder="Search on Microsoft.com"/>
            </form>
          
            
          )} 
          {
            !searchActive ? (
              <span class="material-symbols-outlined" onClick={toogleSearch}>search</span>
            ) : (
              <span class="material-symbols-outlined" onClick={toogleSearch}>close</span>
            )
          }
          
          <span class="material-symbols-outlined">shopping_cart</span>
          <span class="material-symbols-outlined">account_circle</span>
        </div>
    </nav>
  )
}

export default Navbar

