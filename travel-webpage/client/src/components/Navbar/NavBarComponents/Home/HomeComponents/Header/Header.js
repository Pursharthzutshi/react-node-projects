import React, { useEffect } from "react";
import logoImage from "../../images/travel.png"
import {useState} from "react"

function Header(){

    const [showLocation,setShowLocation] = useState([]);
    const [searchLocationInput,setSearchLocationInput] = useState("");

// const SearchField = () =>
//     fetch(`https://restcountries.com/v3.1/all`,{mode:"cors"}).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         setShowLocation(data)
//         console.log(searchLocationInput)

//     })

// useEffect(()=>{
//     fetch(`https://restcountries.com/v3.1/all`,{mode:"cors"}).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         setShowLocation(data)
//         console.log(searchLocationInput)

//     })
// },[])   

    return(
        <div className="header-all-content">
<div className="bg-image">
    <div className="header-heading-div">
        <img className="logo-image" src={logoImage} alt="image"/>
        <h1>Travel Website</h1>
        
</div>
<div>
<marquee><p>Welcome to our travel web page</p></marquee>
</div>

    <br></br>
    <div className="header-search-div">

        <form>
            <input type="date" placeholder="from"/>

<select name = "No of People" >
    <optgroup label="No of people">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    </optgroup>
</select>


<input onChange={(e)=>{setSearchLocationInput(e.target.value)}}/>

        </form>

<button className="header-search-button">Search</button>
</div>
 <select className="search-result-container">

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
            <option>
            <div className="search-result-div">
            <p>{val.name.common}</p>
            <h2>{val.continents}</h2>
            </div>
            </option>
            )
    })
}
</select>
<div className="">

</div>

</div>



</div>
    )
}

export default Header;