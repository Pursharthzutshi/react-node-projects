import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePage.css"
import Header from "./components/HomePage/Header/Header";
import Help from "./components/HomePage/Help/Help"
import WorkSection from "./components/HomePage/Work/WorkSection"
import VisionSection from "./components/HomePage/Vision/VisionSection"
import SubscribeNewsletter from "./components/HomePage/Newsletter/SubscibeNewsletter"
import FooterSection from "./components/HomePage/Footer/FooterSection" 

function HomePage(){

    const [effect,setEffect] =  useState("")
 
   const scrollEvent = (e)=>{
    if(window.innerHeight){
        setEffect(true)
 
}else{
        setEffect(false)

}
}

window.addEventListener("load",scrollEvent)
    return(
        <div className="page">
            
            <Header/>

{            effect && <Help/>

}

<VisionSection/>
<WorkSection/>
<SubscribeNewsletter/>
<FooterSection/>
        </div>
    )
}

export default HomePage