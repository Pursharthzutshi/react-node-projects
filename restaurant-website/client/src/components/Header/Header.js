import React from "react";
import "../Header/Header.css"
import headerLogoDiv from "../../images/burger.png"
import headerContentImage from "../../images/image-from-rawpixel-id-6121211-png.png"
import headerContentImageTwo from "../../images/image-from-rawpixel-id-3282840-jpeg.jpg"
import headerContentImageThree from "../../images/image-from-rawpixel-id-7733248-png.png"

function Header(){
    return(
        <section className="header-section">
            <nav className="header-nav-bar">
                <ul className="header-nav-bar-links-div">
                <img src={headerLogoDiv}/>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact us</li>
                </ul>
                <div className="header-nav-button-container">
                    <button>Order</button>
                    <button>Order</button>
                </div>
            </nav>
<div className="header-content-container">

<div className="header-content-image-div">
<img src={headerContentImage}/>
<img src={headerContentImageTwo}/>
<img src={headerContentImageThree}/>
</div>

<div className="header-content-heading-button-div">
    <h2><span>Lorem ipsum </span>dolor sit amet, <br></br>consectetur adipiscing elit. Proin augue sem,</h2>
    <button>Order Now</button>
    </div>
</div>
            
        </section>
    )
}

export default Header;