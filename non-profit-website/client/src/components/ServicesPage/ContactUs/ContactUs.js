import React from "react";
import "../../ServicesPage/ContactUs/ContactUs.css"

function ContactUs(){
    return(
        <section className='contact-us-section'>

            <h3>Contact Us</h3>
<div className="line"></div>
<div className="contact-us-container">
      <div className="contact-us-div">
        <h3>Chat US</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Chat</button>
        </div>  
        <div className="contact-us-div">
        <h3>Phone No.</h3>
        <p>Lorem ipsum dolor sit amet, at +911239123213</p>
        <button>Chat</button>
        </div>  
        <div className="contact-us-div">
        <h3>Email </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button>Email</button>
        </div>  
</div>
<br></br>

<div className="contact-us-form-container">
    <form className="contact-us-form">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <input placeholder="Name" type="text"/>
    <input placeholder="Email-id" type="text"/>
    <textarea placeholder="Your Message" type="textarea"></textarea>
<div className="contact-us-button-div">
    <button>Send</button>
    </div>
    </form>
</div>

        </section>
    )
}

export default ContactUs;