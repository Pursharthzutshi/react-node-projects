import React from "react";
import image from "../Service/images/travel.png"
import ServiceSectionData from "../../HomeComponents/Service/ServiceSectionData";

function ServiceSection(){
    return(
        <div className="service-section">
                    <h2>Our Service</h2>

{
                ServiceSectionData.map((items)=>{
                    return(
                        <div className="service-div">
                            <div className="service-row">
                                </div>
                                <img className="service-section-image" src={image} alt="image"/>
                            <div className="service-col">
                            <h1>{items.name}</h1>
                            <p>{items.desc}</p>
                            </div>
                            </div>
                    )
                })
            }

        </div>
    )
}

export default ServiceSection;