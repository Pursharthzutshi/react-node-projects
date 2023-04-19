import React from "react";
import "../Footer/FooterSection.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterSection(){
    return(
        <section className='footer-section'>
            <div className="footer-section-container">

<div className="footer-address-contact-div">

<div className="footer-links-div">
<h3>Legal Policies - :</h3>
            
            <Link className="footer-links" to="/">PRIVACY POLICY</Link>
            <Link className="footer-links" to="/">TERMS & CONDITIONS</Link>

            </div>


            <div className="address-div">
            <h3>Office address - :</h3>
            <p>Robert Robertson, 1234 NW Bobcat Lane,<br></br> St. Robert, MO 65584-5678. </p>
            </div>

      

            <div className="contact-us-div">

                <h3>Contact Us - :</h3>
            <div className="contact-us-icon-text-div">
            <FaPhone className="contact-us-icon"/>
            <span>Phone : +214 86291637813</span>
            
            </div>

            <div className="contact-us-icon-text-div">           
            <FaMailBulk className="contact-us-icon"/>
            <span>Email-Id : JohnDoe@gmail.com</span>
            </div>
           
            </div>

</div>

<div className="footer-line"></div>
            <div className="footer-social-media-div">

                <div>
                <h4>Contact Us on our Social Media</h4>
                </div>
                <div className="footer-social-media-icons-div">
            <FaFacebook className="footer-social-media-icons"/>
            <FaInstagram className="footer-social-media-icons"/>
            <FaTwitter className="footer-social-media-icons"/>
            </div>
            </div>
            </div>
        </section>
    )
}

export default FooterSection;