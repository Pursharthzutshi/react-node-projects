import React from "react";
import FaqAccordion from "./SupportComponents/FaqAccordion/FaqAccordion";
import ContactUs from "./SupportComponents/ContactUs/ContactUs";
import TypeHelpBoxes from "./SupportComponents/HelpTypeBoxes/HelpTypeBoxes";
import "./Support.css"
import { Link, animateScroll as scroll } from "react-scroll";

function Support(){
    return(
        <div className="support-section">
        <h2>Support</h2>
        <Link
    activeClass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
/>
        <TypeHelpBoxes/>
        <FaqAccordion/>
        <ContactUs/>
        </div>
    )
}

export default Support;