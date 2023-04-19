import React from "react";
import image from "../images/pexels-tobias-aeppli-1125265.jpg"
import "./Help.css"
import { useState } from "react";
import HelpData from "./HelpData";
import HelpDataTwo from "./HelpDataTwo"
import HelpSectionDivIcons from "../images/logo.png"

function Help(){

    const [data] = useState(HelpData);

    const [dataTwo] = useState(HelpDataTwo);

return(
    <div class="help-section">
        <h2>Help Us</h2>
    {
    data.map((val)=>{
        return(
            <div className="help-image-content-div">
                <div className="help-image-div">
    <img className="image" src={image}/>
    </div>
            <div className="help-content-div">
            <h3>{val.heading}</h3>
            <p>{val.content}</p>
            </div>
            </div>
        )
    })
    }
                <div className="help-section-icon-div">
                {
    dataTwo.map((val)=>{
        return(
            <div className="help-icon-content-div">
 
 
            <img className="image" src={HelpSectionDivIcons}/>
            <h3>{val.title}</h3>
            <p>{val.content}</p>
            </div>
 
        )
    })
    }
                </div>

    </div>
)
}

export default Help