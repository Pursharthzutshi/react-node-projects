import React from "react";
import { useState,useEffect } from "react";

function Flights(){
    const [showLocation,setShowLocation] = useState([]);
    const [searchLocationInput,setSearchLocationInput] = useState("");

    const [showLocationSearchBar,setShowLocationSearchBar] = useState(false);

    const showSearchBar = (e) =>{
        setShowLocationSearchBar(true);
        console.log("he");
    }

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/all`,{mode:"cors"}).then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log(data)
            setShowLocation(data)
            console.log(searchLocationInput)
        })
    },[searchLocationInput])   
    
    return(
        <div className="search-div-container">

<h3>Flights</h3>
<div className="search-div">

<div onClick={showSearchBar} className="from-div">
<strong>Form</strong>

<select>
    
</select>
{/* {
showLocationSearchBar &&
<input onChange={(e)=>{setSearchLocationInput(e.target.value)}}/>
} */}
 

{
   showLocation.filter((val)=>{
       
       if(searchLocationInput === ""){
           return val
       }

       if(val.name.common.toLowerCase().includes(searchLocationInput.toLowerCase()) ){
           return val
           
       }

   }).map((val)=>{
       return(
<div>
        <input onChange={(e)=>{setSearchLocationInput(e.target.value)}}/>

        <datalist id = "locations">
           <option>
            
           <div className="search-result-div">
           <p>{val.name.common}</p>  
           </div>
           </option>
</datalist>
</div>
)
   })
}



</div>


<div className="from-div">

</div>
<div className="from-div">

</div>
<div className="from-div">

</div>
<div className="from-div">

</div>
</div>
        </div>
    )
}

export default Flights;
