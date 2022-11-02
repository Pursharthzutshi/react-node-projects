import React from "react";
import { useState,useEffect,useMemo } from "react";
import Select from 'react-select'
import countryList from 'react-select-country-list'

function Flights(){
    // const [showLocation,setShowLocation] = useState([]);

    // const [showLocationSearchBar,setShowLocationSearchBar] = useState(false);
    //     const [searchLocationInput,setSearchLocationInput] = useState("");

    const [value, setValue] = useState('')
    const [secondValue, setSecondValue] = useState('')
    
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
      setValue(value)
    }

//    const options = () => {

//     showLocation.filter((val)=>{
            
//             if(searchLocationInput === ""){
//                 return val
//             }
     
//             if(val.name.common.toLowerCase().includes(searchLocationInput.toLowerCase()) ){
//                 return val
                
//             }
     
//         }).map((val)=>{
//             return(
//                 <div className="">
            
//                 <p>{val.name.common}</p>  
            
//                 </div>
                
//      )
//         })
//      }
     
     
  
    // const showSearchBar = (e) =>{
    //     setShowLocationSearchBar(true);
    //     console.log("he");
    // }

    // useEffect(()=>{
    //     fetch(`https://restcountries.com/v3.1/all`,{mode:"cors"}).then((response)=>{
    //         return response.json()
    //     }).then((data)=>{
    //         console.log(data)
    //         setShowLocation(data)
    //         console.log(searchLocationInput)
    //     })
    // },[searchLocationInput])   
    
    return(
        <div className="search-div-container">

<h3>Flights</h3>
<div className="search-div">

<div onClick={showSearchBar} className="from-div">

<strong>Form</strong>

{/* {
showLocationSearchBar &&
<input onChange={(e)=>{setSearchLocationInput(e.target.value)}}/>
} */}
 

  <Select options={options} value={value} onChange={changeHandler} />


</div>


<div className="from-div">
    <strong>To</strong>
<Select options={options} value={value} onChange={changeHandler} />

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