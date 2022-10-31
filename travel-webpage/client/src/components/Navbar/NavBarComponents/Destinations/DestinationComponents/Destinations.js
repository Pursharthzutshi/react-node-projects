import React from "react";
import RecommendedDestinations from "../DestinationComponents/RecommendedDestinations/RecommendedDestinations"
import "../DestinationComponents/"

function Destinations(){


    return(
        <div className="">
    <div className="destination-section">

    <h3 className="recommendations-section-heading">Our Recommeded Tour Packages</h3>

    <RecommendedDestinations/>
        </div>

     </div>
    )
}

export default Destinations;