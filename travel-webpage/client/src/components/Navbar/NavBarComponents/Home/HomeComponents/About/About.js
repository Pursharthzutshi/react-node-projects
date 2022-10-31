import React, { useEffect } from "react";
import AboutSectionData from "../About/AboutSectionData"
import "./AboutSection.css"
import image from "../About/images/customer-images/customer-1.jpg"
import {useState} from "react";

function About(){

    const [data] = useState(AboutSectionData);

    const [index,setIndex] = useState(0);

useEffect(()=>{
    let lastindex = data.length - 1;
    
    if(index < 0){
        setIndex(lastindex);
    }
    
    if(index > lastindex){
        setIndex(0)
    }
},[data,index])


useEffect(()=>{
let slider = setInterval(()=>{
    setIndex(index+1)
},2000)
return()=>{
    clearInterval(slider)
}
},[index])

return(
<div className="about-us-section">
    <h2>About Us</h2>

    {
        AboutSectionData.map((items,key)=>{
            
            // const {id,name,desc} = aboutData;
            let slideType = "nextSlide";
            if(index === key){
                slideType = "currentSlide";
            }
            // if(key === index - 1 ||  (index === 0 && key === data.length - 1)){
            //     slideType = "lastSlide"
            // }
            return(
                <div className="about-us-div-container">
                <article className={slideType} key={items.id}>
                    <h3>{items.name}</h3>
                    <img className="about-us-image" src={image}/>
                    <p>{items.desc}</p>
                </article>
                </div>
            )
        })
    }

    <div className="about-us-div-buttons-container">
        <button onClick={()=>{setIndex(index-1)}}>←</button>
        <button onClick={()=>{setIndex(index+1)}}>→</button>
    </div>

</div>
)

    
}

export default About;