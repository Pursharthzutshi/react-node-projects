import React from "react";
import "./Footer.css"
// import {IonIcon} from "@ionic/react"
// import {bowlingBallOutline} from "ionicons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faWhatsapp} from '@fortawesome/free-brands-svg-icons'

function Footer(){


    return(
    <div className="footer">

        <div className="footer-left-container">
            <div className="footer-left-div">
            <div className="footer-icons-container">
            <div className="footer-icons-container-heading-div">
            <h3>Our Social Media</h3>
            </div>
<div className="footer-icons-div">
            <FontAwesomeIcon className="footer-icons" icon={faFacebook}/>     
            <FontAwesomeIcon className="footer-icons" icon={faInstagram}/>     
            <FontAwesomeIcon className="footer-icons" icon={faWhatsapp}/>     
            <FontAwesomeIcon className="footer-icons" icon={faTwitter}/>   
            </div>
           </div>
           </div>
           </div>
            <div>
        
          <div className="footer-right-container">
            <div>
          <h4>@TravelWeb</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam finibus massa felis, sit amet pulvinar lacus volutpat id. Duis convallis nisi quis arcu laoreet condimentum. Pellentesque pharetra nulla sed dui consectetur, id maximus turpis ullamcorper. Cras pharetra metus non diam scelerisque pellentesque sed vitae ex. Ut eget turpis hendrerit, tincidunt felis sed, mollis nulla. </p>
   </div>
                <div className="footer-subscribe-links-div">
        
        <div className="footer-subscribe-div">
        <div>
        <input placeholder="Your Email Id" type="text"/>
        </div><button>Subscribe For More Updates</button>
     
                </div>
                <div className="footer-links-container">
                
                <div>
                <h4>Information</h4>
                </div>
                
                <div className="footer-links-div">
            <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">About us</a>
                <a href="#">Contact Us</a>
                </div>
                </div>
                </div>
                </div>
            </div>
      
    </div>
    )
}

export default Footer;