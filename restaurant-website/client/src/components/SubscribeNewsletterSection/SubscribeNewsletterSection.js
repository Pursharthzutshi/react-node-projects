import React from "react";
import "../SubscribeNewsletterSection/SubscribeNewsletterSection.css"

function SubscribeNewsletter(){
    return(
        <div className="subscribe-newsletter-info-section">
        
        <div className="subscribe-newsletter-info-left-side">
        <p>Subscribe To Our Newsletter</p>
        </div>

        <div className="subscribe-newsletter-info-right-side">
            <h3>Subscribe To </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Aenean quam magna, faucibus at interdum ac, rutrum a ex. Aliquam nec ipsum sed urna ullamcorper molestie ac vitae metus. Ut vestibulum faucibus metus. Ut rhoncus magna purus, a viverra enim blandit non. Nunc vitae bibendum velit.</p>
            <input placeholder="Enter Your Email" type="text"/>
            <button>Subscribe</button>
        </div>

        </div>
    )
}


export default SubscribeNewsletter