import React from "react";
import logoImage from "../../images/travel.png"
import Flights from "../Header/HeaderComponents/Flights"
import "../Header/HeaderComponents/HeaderComponents.css"
import {useState,useEffect} from "react"

function Header(){
  

    return(
        <div className="header-all-content">
<div className="bg-image">
    <div className="header-heading-div">
        <img className="logo-image" src={logoImage} alt="image"/>
        <h1>Travel Website</h1>
        
</div>
<div>
<marquee><p>Welcome to our travel web page</p></marquee>
</div>
<Flights/>




</div>
</div>
    )
}

export default Header;