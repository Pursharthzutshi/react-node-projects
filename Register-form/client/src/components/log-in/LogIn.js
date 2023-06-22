import React from "react";
import { useState,useEffect } from "react";
import axios from "axios"

function LogIn(){

    const [emailId,setEmailId] = useState("") 
    const [password,setPassword] = useState("") 
    const [showUserName,setShowUserName] = useState("")

  const Login = () => {  
    axios.post(`http://localhost:3001/Login`,{emailId:emailId,password:password}).then((response)=>{
    if(response){
        console.log(response.data[0].name);
     
    }
    })
}

useEffect(()=>{
    axios.get(`http://localhost:3001/Login`).then((response)=>{
        if(response.data.LoggedIn === true){
            setShowUserName(response.data.user[0].name)
        }else{
            setShowUserName("Invalid")
        }
    })
})


// useEffect(()=>{
//     axios.get(`http://localhost:3001/Login`).then((response)=>{
//         if(response.data.LoggedIn === true){
//             setShowUserName(response.data.user[0].username)
//         }
//     })
// },[])

    return(
        <div className="">

            <h1>LogIn</h1>
        
        <input onChange = {(e)=>{setEmailId(e.target.value)}} placeholder="Email-id" type="text"/>
        <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password" type="text"/>
        <button onClick = {Login}>Login</button>

        <p>{showUserName}</p>

        </div>
    )
}

export default LogIn;