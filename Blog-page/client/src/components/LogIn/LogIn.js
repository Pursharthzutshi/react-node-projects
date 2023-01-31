import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import "../register.css"
import "./LogIn.css"
import "./LogInResponsive.css"

function LogIn({setShowLogInStatus,setShowLogOut,showLogInStatus,setLogOutButton,setShowWelcomeBackMsg}){

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const [showLoginErrorStatus,setShowLoginErrorStatus] = useState("")

    const [redirectHomePage,setRedirectHomePage] = useState(false)

    const [logInStatus,setLogInStatus] = useState("");

    const logInUsers = ()=>{
        axios.post(`http://localhost:3001/logInUsers`,{email:email,password:password}).then((response)=>{                    
        if(response.data[0].name){
            setShowLogOut(true)
            setRedirectHomePage(true)
            setShowLogOut(false)
            setShowWelcomeBackMsg(true)

        }else if(response.data.message){
            setShowLoginErrorStatus(response.data.message)
            setRedirectHomePage(false) 
            setShowWelcomeBackMsg(false)
        }
        }) 
    }
    useEffect(()=>{
        localStorage.setItem("showLogOut",setShowLogOut(JSON.stringify(true)))
        JSON.stringify(localStorage.getItem("showLogOut"))
      },[setShowLogOut])
          

    return(
        <div className="login-section">
            <br></br>
       <h3>LogIn</h3>
            {
                redirectHomePage && 
                <Navigate to="/"/>
            }
            <br></br>
            <div className="form-container">
            
            <form className="register-form">
            
            <input onChange={(e)=>{setEmail(e.target.value)}} type="text" placeholder="Email Id"/>
            <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password"/>
            
            </form>
            </div>
            <p>{logInStatus}</p>
            <p>{showLoginErrorStatus}</p>
            <div className="register-button-div">
            <button onClick={logInUsers}>LogIn</button>
        </div>
        </div>
    )
}

export default LogIn;