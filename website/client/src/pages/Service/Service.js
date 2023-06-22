import React from "react";
import "../Home.css"
import "../Service/Service.css"
import ServiceImage from "../Service/images/happy-face.png"
import blackImage from "../Service/images/black-image.jpg"
import ServiceSectionData from "../Service/ServiceSectionData";

function Service(){
    return (
        <section className="service-section">
        <div className="service-section-container">
            
{
ServiceSectionData.map((val)=>{
    return(
        <div className="service-section-box">
      <img src={ServiceImage}/>
      <p>{val.text}</p>
        </div>
    )
})
}
</div>
   
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut felis eget lacus vestibulum porttitor. </h3>
<div className="products-images-container">
     
<img src={blackImage}/>
<img src={blackImage}/>
<img src={blackImage}/>
<img src={blackImage}/>


<img src={blackImage}/>
<img src={blackImage}/>
<img src={blackImage}/>
<img src={blackImage}/>

</div>
        </section>
    )
}

export default Service;