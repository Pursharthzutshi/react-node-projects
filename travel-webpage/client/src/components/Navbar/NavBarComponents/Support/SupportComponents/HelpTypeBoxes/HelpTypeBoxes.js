import React from "react";
import HelpTypeBoxesData from "./HelpTypeBoxesData";
import "./HelpTypeBoxes.css"
import {useState} from "react"
import boxImage from "../ContactUs/images/travel-luggage.png"

function HelpTypeBoxes(){

    const [search,setSearch] = useState("");

    return(
        <div>
            <div className="search-input-div">
                  <input placeholder="Search Your Query" onChange={(e)=>{setSearch(e.target.value)}} type="text"/>
                  </div>
                    <div className="help-type-boxes-container">
           
           {
            HelpTypeBoxesData.filter((val)=>{
                if(search === ""){
                    return val
                }

                if(val.heading.toLowerCase().includes(search.toLowerCase())){
                    return val;
                }
            }).map((val)=>{
                return(
                    <div className="help-type-boxes-div">
                        <img src={boxImage}/>
                        <h3>{val.heading}</h3>
                        <p>{val.desc}</p>
                    </div>
                )
            })
            
           }

            
        </div>
</div>
    )
    
}

export default HelpTypeBoxes;