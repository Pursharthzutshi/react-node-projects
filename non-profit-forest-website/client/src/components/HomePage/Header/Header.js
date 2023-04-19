import React, { useState } from "react";
import "./Header.css"
import headerLogoImage from "../images/logo.png";
import { BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';

function Header(){

    const [showNavBarDropDown,setShowNavBarDropDown] = useState(false);


    return(
     <div className="header-section">
      <nav className="header-nav">
      <Link className="logo-home-button-link" to="/">
      <div className="logo-div">
            <img src={headerLogoImage}/>
            <h3>NP Website</h3>
            </div>

            </Link>          
             <ul>
                <li onMouseOver={()=>{setShowNavBarDropDown(true)}} onMouseLeave={()=>{setShowNavBarDropDown(false)}} href="#header">Services</li>
                <Link className="donate-link-btn" to="/donate">Donate</Link>
            </ul>
            
        {
           showNavBarDropDown && <div onMouseOver={()=>{setShowNavBarDropDown(true)}} onMouseLeave={()=>{setShowNavBarDropDown(false)}} className="service-box-drop-down">
            <div className="drop-down-link-box">
            <Link className="link" to ="/ContactUs">Home</Link>
            </div>
            <div className="drop-down-link-box">
            <Link className="link" to ="/Home">Home</Link>
            </div>
            <div className="drop-down-link-box">
            <Link className="link" to ="/Home">Home</Link>
            </div>
            <div className="drop-down-link-box">
            <Link className="link" to ="/Home">Home</Link>
            </div>
            <div className="drop-down-link-box">
            <Link className="link" to ="/Home">Home</Link>
            </div>
           </div>
        } 
           </nav>
           <div id="header" className="header">
         
         <div className="header-content-div">
            <h2>Loreum Ipsum</h2>
                <h3>Pellentesque feugiat dolor a arcu mollis,<br></br> a efficitur eros lacinia. Praesent blandit bibendum leo ac rutrum. </h3>

</div>
        </div>
        </div>
   
    )
}

export default Header;