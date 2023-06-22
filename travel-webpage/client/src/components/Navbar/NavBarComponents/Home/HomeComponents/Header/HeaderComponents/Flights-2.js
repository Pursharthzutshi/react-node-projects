import axios from "axios";
import React from "react";
import { useState,useEffect,useMemo } from "react";
import Select from 'react-select'
import countryList from 'react-select-country-list'
// import {decode as base64_decode, encode as base64_encode} from 'base-64';
// import {Buffer} from 'buffer';
import {useNavigate} from "react-router-dom"
import "../../../../../SearchFlightsResults/SearchFlightsResults.css"
import Flightimage from "../../../../../SearchFlightsResults/indigo.png"


function Flights(){

    const [fromLocationInput,setFromLocationInput] = useState("");
    const [toLocationInput,setToLocationInput] = useState("");


    const [inputValue, settingValue] = useState("");
    const [showDecrementButton,setShowDecrementButton] = useState(false);

    const [personCounter,setPersonCounter] = useState(1);
    const [showLocationSearchField,setShowLocationSearchField] = useState(""); 

    const [showSecondLocationSearchField,setShowSecondLocationSearchField] = useState(""); 

    const [value, setValue] = useState('')
    const [secondValue, setSecondValue] = useState('')

    const [showFlightsResults,setShowFlightResults]  = useState([]);
    
    const [redirectToSearchFlightPage,setRedirectToSearchFlightPage] = useState(false);

    const [noFlightsAvailMsg,setNoFlightsAvailMsg] = useState(false); 

    const searchFlights = () =>{
                axios.post(`http://localhost:3002/fetchflightsData`,{fromLocationInput:fromLocationInput,toLocationInput:toLocationInput}).then((response)=>{
                if(response.data.message){
                    console.log(response.data.message)
                    setNoFlightsAvailMsg(true)
                    // setRedirectToSearchFlightPage(false)
                    }else{   
                        console.log(response.data);      
                        setNoFlightsAvailMsg(false)
                        setShowFlightResults(response.data)
                        // setRedirectToSearchFlightPage(true)
                        navigate("/searchFlightsResults",{showFlightsResults:showFlightsResults,setShowFlightResults:setShowFlightResults})
                    }
                })
}
           
     

    const options = useMemo(() => countryList().getData(), [])

    const showSearchBar = ()=>{
        setShowLocationSearchField(true)
    }


    useEffect(()=>{
        if(personCounter === 1){
            setShowDecrementButton(false)
            console.log(personCounter)  
        }else{
            setShowDecrementButton(true)

        }
    }, [personCounter])

    const showSecondSearchBar = ()=>{
        setShowSecondLocationSearchField(true)
    }

    const changeHandler = (value) => {
      setValue(value)
    }
    
const secondChangeHandler = (secondValue) =>{
    setSecondValue(secondValue)
}

    
//  const navigate = useNavigate();

    

    return(
        <div className="search-div-container">
{/* {
redirectToSearchFlightPage &&

} */}

<h3>Flights</h3>
<div className="search-div">

<div onClick={showSearchBar} className="from-div">
  
<strong>Form</strong>
<p>Your location</p> 


{
showLocationSearchField &&
<Select className="search-bar" options={options} value={value} onChange={changeHandler} />
}

<input onChange={(e)=>{setFromLocationInput(e.target.value)}} type='text'/>

</div>


<div onClick={showSecondSearchBar} className="to-div">
  
<strong>TO</strong>
<p>Destination</p> 

{
showSecondLocationSearchField &&
<Select className="search-bar" options={options} value={secondValue} onChange={secondChangeHandler} />
}

<input onChange={(e)=>{setToLocationInput(e.target.value)}} type='text'/>

</div>

<div className="departure-div">
<strong>Departure Date</strong>
<br></br>
<input type="date"/>

</div>

<div className="departure-div">
<strong>Return Date</strong>
<br></br>
<input type="date"/>

</div>

<div className="departure-div">
<strong>No of Person</strong>
<br></br>
<div className="person-counter-div">

    {showDecrementButton?
        
<button onClick={()=>{setPersonCounter(personCounter-1)}}>-</button>:null}
<p>{personCounter}</p>
<button onClick={()=>{setPersonCounter(personCounter+1)}}>+</button>

</div>

</div>

</div>

<div className="search-button-div">
<button onClick={searchFlights}>Search</button>
</div>

{
    noFlightsAvailMsg && <p>No Flights Avail</p>
}

{
    showFlightsResults.map((val)=>{
        return( 
            <div className="flight-results-container">
        <div className="flights-results-div">
            <div>
                <img className="flight-image" src={Flightimage}/>
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


export default Flights;