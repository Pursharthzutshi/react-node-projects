import React from "react";
import { useState,useEffect,useMemo } from "react";
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Flights(){

    const [showDecrementButton,setShowDecrementButton] = useState(false);

    const [personCounter,setPersonCounter] = useState(1);
    const [showLocationSearchField,setShowLocationSearchField] = useState(""); 

    const [showSecondLocationSearchField,setShowSecondLocationSearchField] = useState(""); 

    const [value, setValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    
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

    return(
        <div className="search-div-container">

<h3>Flights</h3>
<div className="search-div">

<div onClick={showSearchBar} className="from-div">
  
<strong>Form</strong>
<p>Your location</p> 

{
showLocationSearchField &&
<Select className="search-bar" options={options} value={value} onChange={changeHandler} />
}

</div>


<div onClick={showSecondSearchBar} className="to-div">
  
<strong>TO</strong>
<p>Destination</p> 

{
showSecondLocationSearchField &&
<Select className="search-bar" options={options} value={secondValue} onChange={secondChangeHandler} />
}

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
<button>Search</button>
</div>

        </div>
    )
}

export default Flights;