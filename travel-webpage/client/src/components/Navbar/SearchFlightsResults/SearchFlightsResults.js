import React, { useEffect } from "react";
import "../SearchFlightsResults/SearchFlightsResults.css"
import {useState} from "react";
import axios from "axios";

function SearchFlightsResults({showflightsresults,setshowflightsresults}){

useEffect(()=>{
    setshowflightsresults(true);
console.log(setshowflightsresults)
},[setshowflightsresults])
    
    return(
        <div className="search-flights-results">
        <h3>Flights Results</h3>
      
            
        {showflightsresults &&
    showflightsresults.map((val)=>{
        return( 
            <div className="flight-results-container">
        <div className="flights-results-div">
            <div>
                </div>
            <div>    
            <p>{val.flight_name}</p>
            <p className="flight-number">{val.flight_number}</p>
</div>
<div>
<span>{val.from_list}</span>
<p>{val.departure_time}</p>
<span>Departure Time</span>
    </div>

    <div>
<p className="total-time">{val.total_time}</p>
<p className="flight-stop">{val.flight_stop}</p>
    </div>
      
    <div>
<span>{val.to_list}</span>
<p>{val.arrival_time}</p>
<span>Arrival Time</span>
    </div>
      
    <div>
        <p>{val.price}</p>
        </div>

        <div>
            <button>Book Flight</button>
        </div>

        </div>
        </div>
            )
    })
}

        </div>
    )

}

export default SearchFlightsResults;