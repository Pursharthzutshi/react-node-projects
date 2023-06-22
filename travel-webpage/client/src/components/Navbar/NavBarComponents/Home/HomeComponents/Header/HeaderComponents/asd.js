import axios from "axios";
import React from "react";
import { useState,useEffect,useMemo } from "react";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import {Buffer} from 'buffer';
import {useNavigation} from "react-router-dom"

function Flights(){
    
    const navigate = useNavigation();

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


const searchFlights = () =>{

 axios.post(`http://localhost:3002/fetchflightsData`,{fromLocationInput:fromLocationInput,toLocationInput:toLocationInput}).then((response)=>{
    setShowFlightResults(response.data);
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


const searchFlightsResultPage = (e) =>{
    navigate("/")
    console.log(e);
}

    return(
        <div className="search-div-container">

<h3>Flights</h3>
<div className="search-div">


<button onClick={searchFlightsResultPage}>Search</button>


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
</div>

{
showFlightsResults.map((val)=>{
    
// const bufferDecode = Buffer.from(JSON.stringify(val.image)).toString("base64");

return(
    <div>
{/* 
             <img src = {bufferDecode} alt = "image"/> */}
      
            </div>
    )
})
}

        </div>
    )
}

export default Flights;