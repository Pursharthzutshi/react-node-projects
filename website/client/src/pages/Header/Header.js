import React from "react";
import "../Home.css"
import "../Header/Header.css"
import HeaderImage from "../Header/images/header-icon.png"

function Header(){
    return(
<header>
    <div className="left-side-header">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Morbi consequat vestibulum massa, eget efficitur eros dapibus at.<br></br> Nullam et metus nisl. Mauris luctus libero vel tellus finibus tincidunt.<br></br> Nullam ultricies eu erat vel finibus. Curabitur egestas dapibus lectus, quis porttitor mauris venenatis et. <br></br>Nulla molestie lacus non nisl cursus, ut consequat elit cursus. 
    </p>
    <div className="buttons-container">
            <button>Learn More</button>
            <button>Learn More</button>
        </div>
        
    <div className="circle">
    <div className="circle">
        
    </div>

    </div>
    
    </div>
    
    <div className="right-side-header">
        <img src={HeaderImage}/>
    </div>
</header>
        )
}
export default Header;