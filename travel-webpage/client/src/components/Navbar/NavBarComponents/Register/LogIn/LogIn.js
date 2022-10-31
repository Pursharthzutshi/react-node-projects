import React,{useState,useEffect} from "react";
import "./LogIn.css"
import axios from "axios"
import {Navigate} from "react-router-dom";
import Home from "../../Home/Home";

function LogIn({changeLogIn,setChangeLogIn,setShowUserAccount}){

    const [redirect,setRedirect] = useState(false);

    const [emailID,setEmailID] = useState("")

    const [password,setPassword] = useState("")

    const [showSignUpMsg,setShowSignUpMsg] = useState(false);

    const [showMsg,setShowMsg] = useState("Welcome");

    axios.defaults.withCredentials = true;

    
const login = ()  =>{
 
    axios.post(`http://localhost:3002/login`,{emailID:emailID,password:password}).then((response)=>{
            if(!response.data.auth){
                setShowSignUpMsg(false)
                setRedirect(false)
                setShowMsg(false)
                setChangeLogIn(true);
                setShowUserAccount(false)

            }else{
                setShowSignUpMsg(true)
                setShowMsg(true)
                setRedirect(true);
                setChangeLogIn(true);
                setShowUserAccount(true)  
            }
    })
}


useEffect(()=>{
    const refreshLogOut = window.localStorage.getItem("setChangeLogOut")
    setChangeLogIn(JSON.parse(refreshLogOut));

},[])

 useEffect(()=>{     
 window.localStorage.setItem("setChangeLogIn",changeLogIn);
},[changeLogIn])


useEffect(()=>{
    axios.get(`http://localhost:3002/login`).then((response)=>{
        if(response.data.loggedIn === true){
            setShowSignUpMsg(response.data.user[0].name)
        }
    })
},[])


useEffect(()=>{
        axios.get(`http://localhost:3002/userAuth`,{
            headers:{
                "x-access-token":localStorage.getItem("token"),
            },
        }).then((response)=>{
            console.log(response);
        })
    
},[])

    const submitForm = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="sign-up-section">

<div className="left-side-container">
    <div className="sign-up-form-container">
    <h2>Log In</h2>
    <div className="circle"></div>
    <div className="circle-two"></div>
    <div className="sign-up-line"></div>
    
    <br></br>
    {redirect &&
    <div>
    
<Navigate to ="/" showMsg={showMsg}/>

    </div>
    }

        <form onSubmit={submitForm} className="sign-up-form">
   
    <input onChange={(e)=>{setEmailID(e.target.value)}} placeholder="Email-ID" type="email"/>
    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password"/>
   
    <button onClick={login}>Login</button>

    {showSignUpMsg}
    </form>

        </div>
        </div>
<div className="right-side-conatiner">
<h2>Sign Up</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor mi quis erat dignissim malesuada. </p>
</div>
    
        </div>

    )
}

export default LogIn;