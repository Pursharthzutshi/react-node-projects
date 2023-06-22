import React from "react";
import logoImage from "../../images/travel.png"
import "../Header/HeaderComponents/HeaderComponents.css"
import {Link, Outlet } from "react-router-dom";


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
<nav>

<Link className="links" to ="/flights">Flights</Link>    

</nav>

<Outlet/>
            


</div>
</div>
    )
}

export default Header;