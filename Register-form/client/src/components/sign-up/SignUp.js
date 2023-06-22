import React from "react";
import { useState } from "react";
import axios from "axios";

function SignUp(){
    
    const [emailId,setEmailId] = useState("")
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [reCheckPassword,setReCheckPassword] = useState("")

const register = () =>{
     axios.post(`http://localhost:3001/Register`,{emailId:emailId,name:name,password:password,reCheckPassword:reCheckPassword}).then((response)=>{
        if(response){
            console.log(response.data);
        }
    })
}

    return(
        <div className="">

            <h1>SignUp</h1>

        <input onChange = {(e)=>{setEmailId(e.target.value)}} placeholder="Email-id" type="text"/>
        <input onChange = {(e)=>{setName(e.target.value)}} placeholder="Full-Name" type="text"/>
        <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="Password" type="text"/>
        <input onChange = {(e)=>{setReCheckPassword(e.target.value)}} placeholder="ReCheck-Password" type="text"/>

        <button onClick={register}>Register</button>

        </div>
    )
}

export default SignUp;