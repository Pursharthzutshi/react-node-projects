import react, { useEffect } from "react"
import { useState } from "react"
import "../UserInfo/UserInfo.css";

function UserInfo({showErrorMessage,firstName,setFirstName,lastName,setLastName,email,setEmail,address,setAddress,phone,setPhone,state,setState,city,setCity,zipcode,setZipcode}){
    const [name,setName] = useState("")
    
    const [inputBorderColor,setInputBorderColor] = useState(false);

    const input  = document.querySelector(".input");

    // useEffect(()=>{
    //     if(setInputBorderColor === true){
    //         input.style.border="2px solid red";
    //     }
    // },[input.style])

    return(
   
<div className="user-info-div">
    <form className="user-info-form">
<h3><span>Fill</span> Up the Form</h3>
<div className="user-info-form-row">
<input className="input" value={firstName} placeholder="First name" onChange={(e)=>{setFirstName(e.target.value)}} type="text"/>
<input value={lastName} placeholder="Last name" onChange={(e)=>{setLastName(e.target.value)}} type="text"/>
</div>

<input value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} type="text"/>

<textarea placeholder="Address" onChange={(e)=>{setAddress(e.target.value)}} type="text"/>

<div className="user-info-form-row">
<input placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}} type="text"/>
<input placeholder="State" onChange={(e)=>{setState(e.target.value)}} type="text"/>
</div>
<div className="user-info-form-row">

<input placeholder="City" onChange={(e)=>{setCity(e.target.value)}} type="text"/>
<input placeholder="Zip Code" onChange={(e)=>{setZipcode(e.target.value)}} type="text"/>

</div>

</form>
<p>{showErrorMessage}</p>
</div>

)
}

export default UserInfo;