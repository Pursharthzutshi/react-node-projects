import React from "react";
import axios from "axios"
import {useState,useEffect} from "react";
import {Link, Navigate} from "react-router-dom";
import "../Register/LogInPage.css"

function LogInPage({setUserName,setShowUserLoggedIn,setLoggedInEmailID,setShowAddressOption,showLogOutButton,setShowLogOutButton,loggedInButtonState,setMyOrderButton,signUpMessage,setSignUpMessage,setWelcomeBackMessageTimeInterval}){

    const [logInEmailID,setLogInEmailID] = useState("") 
    const [LogInPassword,setLogInPassword] = useState("")
    const [redirectHomePage,setRedirectHomePage] = useState(false);

    const [logInErrorMessage,setLogInErrorMessage] = useState("")
    const [logInErrorMessageBox,setLogInErrorMessageBox] = useState("")

    const logIn = (e)=>{
        e.preventDefault();    
        axios.post(`http://localhost:3001/Registration/login`,({logInEmailID:logInEmailID,LogInPassword:LogInPassword})).then((response)=>{
     
        if(response.data.message){
                console.log(logInErrorMessage)
                setLogInErrorMessage(response.data.message)
                setShowLogOutButton(false)
                setShowUserLoggedIn(false)
                setShowAddressOption(false)
                setMyOrderButton(false)
                localStorage.setItem("showLogOutButton","false")        
                localStorage.setItem("loggedInEmailID",null)
                setLogInErrorMessage("Log In is not successful")
                setLogInErrorMessageBox(true)
            }else{
                setWelcomeBackMessageTimeInterval(true)
                setShowLogOutButton(true) 
                setMyOrderButton(true)
                setUserName(response.data.data[0].name)
                console.log(response.data.data[0].emailID)
                setLoggedInEmailID(response.data.data[0].emailID)
                setShowAddressOption(true)
                localStorage.setItem("showLogOutButton","true")
                localStorage.setItem("loggedInEmailID",logInEmailID)
                setLogInErrorMessageBox(false)
            }
        })
    }


    return(
        <div className="login-page">


<div>
<br></br>


{
    signUpMessage && <p>Signed Up successfully</p>
}

</div>

            <form className="login-page-form" onSubmit = {logIn}>
                <h4>Login </h4>
                <input onChange={(e)=>{setLogInEmailID(e.target.value)}} placeholder="Email-id" type="text"/>
                <input onChange={(e)=>{setLogInPassword(e.target.value)}} placeholder="Password" type="text"/>
                <div>
                <button onClick={logIn}>Log In</button>
                <p className="or">OR</p>
                <Link className="sign-up-button" to="/signUpPage">Sign Up</Link>
           
                {
                logInErrorMessageBox &&
                <div className="login-error-message-box">
                    <p className="login-error-message">{logInErrorMessage}</p>
                    
                    </div> 
                }
                </div>
            </form>
        </div>
            )
}

export default LogInPage;