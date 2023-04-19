import React from "react";
import "./SubscribeNewsletter.css"

function SubscribeNewsletter(){
    return(
        <div className="subscribe-newsletter-section">
            <div className="subscribe-newsletter-container">
                
            <h3>Subscribe To Our Newsletter</h3>
            <div className="subscribe-newsletter-div">
            <p>Join our community
Get the latest conservation updates, be inspired to take action, <br></br>and learn about ways to get involved</p>
                <input type="text" placeholder="Enter Your Email-id"/>
                <button>Subscribe</button>
   
            </div>
            </div>
        </div>
    )
}

export default SubscribeNewsletter