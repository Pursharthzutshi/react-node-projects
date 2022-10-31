import React from "react";
import RecommendedDestinations from "../DestinationComponents/RecommendedDestinations/RecommendedDestinations"
// import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
// import {Outlet} from "react-router-dom";
// import HillStations from "./RecommendedDestinations/RecommendedDestinationsComponents/HillStations"
// import Beaches from "../DestinationComponents/RecommendedDestinations/RecommendedDestinationsComponents/Beaches" 
import { useState } from "react";
import RecommendedDestinationsData from "../DestinationComponents/RecommendedDestinations/RecommendedDestinationsData"


function Destinations(){

    const [showHillStations,setShowHillStations] = useState(RecommendedDestinationsData)
    
    const filteredItem = (data) =>{
        const updatedItem = RecommendedDestinationsData.filter((val)=>{
            return val.type = data
        })
        setShowHillStations(updatedItem);
    }

 
    return(
        <div className="">
    <div>
    {/* <Link to ="/HillStations">Hill Stations/</Link>
    <Link to ="/Beaches">Beaches/</Link>
    <Link to ="/Cities">Cities and Town/</Link>
    <Outlet/>
    </div>
    <Routes>
        <Route path="/" element={<RecommendedDestinations/>}/>
        <Route path = "/HillStations" element = {<HillStations/>}/>
        <Route path = "/Beaches" element = {<Beaches/>}/>

    </Routes> */}
        </div>

 <div>
 <button onClick={()=>{filteredItem("HillStations")}}>Hill Stations</button>
     <button>Mountain</button>
     {
     showHillStations.map((val)=>{
        return val.type 
     })}
     <RecommendedDestinations/>
     </div>
     </div>
    )
}

export default Destinations;