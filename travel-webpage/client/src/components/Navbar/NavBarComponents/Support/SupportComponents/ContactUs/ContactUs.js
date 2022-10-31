import React from "react";
import "./ContactUs.css"


function ContactUs(){
    return(
        <div className="form-div">
            <h3>Contact Us</h3>
            <div className="form-container">
            <div className="form-left-div">

                <h1>Tell Us Your Query</h1>
            </div>
            <form className="contact-us-form">
                
                <div className="form-input-row-div">
                <input placeholder="Full Name" type="text"/>
                <input placeholder="Email Id" type="text"/>
                </div>
                <div className="">
                <textarea placeholder="Type Your Problem" rol = "200" col = "300"></textarea>
</div>
                <button>Send</button>
            </form>
        </div>
        </div>
    )
}

export default ContactUs;