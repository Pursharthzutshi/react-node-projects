import React from "react";
import "../Home.css"
import "../Testimonials/Testimonials.css"
import TestimonialsData from "./TestimonialsData";
import { useState } from "react";

function Testimonials(){

    const [leftButtonClick,setLeftButtonClick]  = useState("")
    const [rightButtonClick,setRightButtonClick]  = useState("")

    const [currentIndex,setCurrentIndex] = useState(0)

    return(
        <section className="testimonials-section">
            <div className="left-side-testimonials">
            <button onClick={()=>{setCurrentIndex(currentIndex-1)}}>left side</button>
            </div>

{
    
    TestimonialsData.map((val)=>{

        if(currentIndex === -1){
            setCurrentIndex(0)
        }

        if(currentIndex === TestimonialsData.length-1){
            setCurrentIndex(0)

        }        

        console.log(currentIndex)
        return(
            <div>
                <p>{TestimonialsData[currentIndex].text}</p>
            </div>
        )
    })
}


            <div className="right-side-testimonials">
            <button onClick={()=>{setCurrentIndex(currentIndex+1)}}>Right side</button>
            </div>
        </section>
      )
}
export default Testimonials;