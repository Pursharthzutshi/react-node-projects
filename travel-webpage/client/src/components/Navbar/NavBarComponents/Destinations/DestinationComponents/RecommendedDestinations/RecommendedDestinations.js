import React, { useState } from "react";
import "../RecommendedDestinations/RecommendedDestinations.css"
import RecommendedDestinationsData from "../RecommendedDestinations/RecommendedDestinationsData"
import RecommendedDestinationsProps from "../RecommendedDestinations/RecommendedDestinationsProps"

function RecommendedDestinations(){
    
const [showHillStations,setShowHillStations] = useState(RecommendedDestinationsData)
    
const filteredItem = (data) =>{
    const updatedItem = RecommendedDestinationsData.filter((val)=>{  
        if(val.type === data){
            return val.type = data
        }
    })
    setShowHillStations(updatedItem);
}


const showAll = (data) =>{

    setShowHillStations(
        RecommendedDestinationsData.map((val)=>{
            if(val.common === data){
                return val.common === data
            }
    }))

    console.log(setShowHillStations);
}

    <div className="">
                       

</div>                         

    return(

        <section className="recommendations-section">   

<div className="recommended-tour-package-buttons-container">

<button onClick={()=>showAll("all")}>All</button>
<button onClick={()=>{filteredItem("HillStations")}}>Hill Stations</button>
<button onClick={()=>{filteredItem("Beaches")}}>Beaches</button>
<button onClick={()=>{filteredItem("Cities")}}>Cities</button>

</div>

<div className="recommendations-div-container">
            {
                showHillStations.map((val)=>{
                    return(
                        <div >
                        <RecommendedDestinationsProps key={val.key} {...val}/>
                        
                        </div>
                    )
                    
                })
            }
            
   </div>

        </section>
     
    )
}

export default RecommendedDestinations;