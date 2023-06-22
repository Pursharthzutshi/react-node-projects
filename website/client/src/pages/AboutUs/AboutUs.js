import React from "react";
import AboutUsData from "./AboutUsData";
import "../AboutUs/AboutUs.css"
import HappyFace from "../AboutUs/images/happy-face.png"

function AboutUs(){
    return(
        <section className="about-us-section">

            <h3>About Us</h3>
            

<div className="about-us-container">
            {
            AboutUsData.map((val)=>{
                return(
                    <div className="about-us-container">
                    <div className="about-us-box">
                    <img src = {HappyFace}/>
                        <p>{val.text}</p>
                        </div>
                        </div>
                )
            })
            }
            </div>

        </section>
    )
}

export default AboutUs;