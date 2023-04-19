import React from "react";
import "./VisionSection.css"
import VisionSectionImage from "../images/pexels-pixabay-51951.jpg"
import VisionSectionData from "./VisionSectionData";

function VisionSection(){
    return(
    <section className="vision-section">

<h2 className="heading">Our Vision</h2>

        <div className="vision-section-container">

    
{
    VisionSectionData.map((val)=>{
        return(
            <div className="vision-section-div">
<img className="image" src={VisionSectionImage}/>

            <div className="vision-section-text-heading-div">
                   <h3 className="heading">{val.heading}</h3>        
        <p className="text">{val.content}</p>        
    </div>
            </div>
        )
    })
}
        </div>
    </section>
    )
}

export default VisionSection;