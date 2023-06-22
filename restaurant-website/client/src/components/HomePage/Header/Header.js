import React from "react";
import "../Header/Header.css"
import headerContentImage from "../../../images/image-from-rawpixel-id-6121211-png.png"
import headerContentImageTwo from "../../../images/image-from-rawpixel-id-3282840-jpeg.jpg"
import headerContentImageThree from "../../../images/image-from-rawpixel-id-7733248-png.png"
import { BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';
import Navbar from "../Header/Navbar"

function Header({showLogOutButton}){
    return(
        <section className="header-section">

<div className="header-content-container">

<div className="header-content-image-div">
<img src={headerContentImage}/>
<img src={headerContentImageTwo}/>
<img src={headerContentImageThree}/>
</div>

<div className="header-content-heading-button-div">
    <h2><span>Lorem ipsum </span>dolor sit amet, <br></br>consectetur adipiscing elit. Proin augue sem,</h2>

    <Link className="order-login-button" to="/orderNowPage">
    {
    showLogOutButton ?<p className="order-now-button">Order Now</p>:<p className="login-button">Log In to Order Now</p>
    }
    
        </Link>
    </div>

</div>
            
        </section>
    )
}

export default Header;