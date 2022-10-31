import React, { useEffect } from "react";
import AboutSectionData from "../About/AboutSectionData"
import "./AboutSection.css"
import {useState} from "react";

function About(){

    const [showData] = useState(AboutSectionData);

    const [index,setIndex] = useState(0);

    useEffect(()=>{

        let lastIndex = showData.length - 1

        if(index < 0){
            setIndex(lastIndex);
        }

        if(index > lastIndex){
            setIndex(0);
        }
    },[showData,index])

    // useEffect(()=>{
    //     let slider 
    // })

    return(
         
            <div className="about-section" >
            <h1>About Us</h1>
{
    AboutSectionData.map((items,key)=>{
        const {id,name,desc} = items;
        let aboutDivConatiner = "nextSlide"
        
        if(index === key){
            aboutDivConatiner = "currentSlide"
        }

        if(key === index - 1 ||  (index === 0 && key === showData.length - 1)){
            aboutDivConatiner = "lastSlide"
        }

        return(
            <article className = {aboutDivConatiner} key = {id}>
        
                <h3>{name}</h3>
                <p>{desc}</p>
                
            </article>
        )
    })
    }


<div className="about-div-container">

<button onClick={()=>setIndex(index + 1)}>←</button>

<button onClick={()=>setIndex(index - 1)}>→</button>

</div>

            </div>

    )
}

export default About;