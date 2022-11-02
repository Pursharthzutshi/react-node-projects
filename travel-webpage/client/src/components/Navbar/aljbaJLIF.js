import {React,useEffect,useState} from "react";
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Home from "./NavBarComponents/Home/Home";
import "./Navbar.css"
import Destinations from "../Navbar/NavBarComponents/Destinations/Destinations";
import Support from "./NavBarComponents/Support/Support";
import logoImage from "../Navbar/NavBarComponents/Home/images/travel.png"
import SignUp from "./NavBarComponents/Register/SignUp/SignUp";
import LogIn from "./NavBarComponents/Register/LogIn/LogIn";
import axios from "axios";
import AccountInfo from "./NavBarComponents/Register/AccountInfo/AccountInfo";

function Navbar(){
    const [changeLogIn,setChangeLogIn] = useState(false);
    const [showUserAccount,setShowUserAccount] = useState(false);
    
    useEffect(()=>{
        const refreshLogOut = localStorage.getItem("setChangeLogIn")
        const saveAccountInfo = localStorage.getItem("setShowUserAccount");

        setShowUserAccount(JSON.parse(saveAccountInfo));    
        setChangeLogIn(JSON.parse(refreshLogOut));    
        console.log("changeLogIn",changeLogIn);
},[])

 useEffect(()=>{     
 localStorage.setItem("setChangeLogIn",true);
 localStorage.setItem("setShowUserAccount",true);
 
},[changeLogIn, setChangeLogIn, showUserAccount])


    const LogOut = ()  =>{ 
        axios.get(`http://localhost:3002/logout`).then((response)=>{
            console.log(response);
        })
        setChangeLogIn(false)
        setShowUserAccount(false)
        localStorage.getItem("setShowUserAccount");
    }


    return(
        <nav>
            <div className="navbar">

                <div className="navbar-links-container">
                    <div className="nav-logo-heading-div">
                    <img className="logo-image" src={logoImage} alt="image"/>
        <h3>Travel Website</h3>
        </div>
            <Link className="links" to ="/">Home</Link>    
            <Link className="links" to ="/destinations">Destinations</Link>    
            <Link className="links" to ="/Support">Support</Link>    

            </div>
            <div className="login-sign-up-container">

            
            <Link className="links" to ="/LogIn">{changeLogIn ?  
            
            <div onClick={LogOut}>logout</div>:
            <div>login</div> 
            }
             
            </Link>    

            <Link className="links" to ="/SignUp">SignUp</Link>    
            
             
        {
        showUserAccount ?<Link className="links" to ="/accountInfo">Account Info</Link>:null
        }
            </div>
            </div>
            
            <Routes>
            
        <Route index element = {<Home showMsg = {true}/>}>Home</Route>
        <Route path = "/destinations" element = {<Destinations/>}>Destinations</Route>
        <Route path = "/Support" element = {<Support/>}>Support</Route>

        <Route path = "/LogIn" element = {<LogIn changeLogIn={changeLogIn} setChangeLogIn={setChangeLogIn} showUserAccount={showUserAccount} setShowUserAccount={setShowUserAccount}/>}>{changeLogIn}</Route>
        <Route path = "/SignUp" element = {<SignUp/>}>Sign Up</Route>
        {
        showUserAccount ? <Route path = "/accountInfo" element = {<AccountInfo/>}>Account info</Route>:null
        }
        </Routes>
        
            </nav>
            
    )
}

export default Navbar;