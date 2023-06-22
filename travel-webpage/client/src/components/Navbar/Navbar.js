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
import Flights from "./NavBarComponents/Home/HomeComponents/Header/HeaderComponents/Flights";
import SearchFlightsResults from "../Navbar/SearchFlightsResults/SearchFlightsResults"

function Navbar({changeLogIn,setChangeLogIn,accountInfo,setAccountInfo}){


    const LogOut = ()  =>{ 
        axios.get(`http://localhost:3002/logout`).then((response)=>{
            console.log(response);
        })
        setChangeLogIn(false)
        setAccountInfo(false)
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
        accountInfo ?<Link className="links" to ="/accountInfo">Account Info</Link>:null
        }
            </div>
            </div>
            
            <Routes>
            
        <Route path="/" element = {<Home showMsg = {true}/>}>Home</Route>
        <Route path = "/destinations" element = {<Destinations/>}>Destinations</Route>
        <Route path = "/Support" element = {<Support/>}>Support</Route>

        <Route path = "/LogIn" element = {<LogIn changeLogIn={changeLogIn} setChangeLogIn={setChangeLogIn} accountInfo={accountInfo} setAccountInfo={setAccountInfo} />}>{changeLogIn}</Route>
        <Route path = "/SignUp" element = {<SignUp/>}>Sign Up</Route>
        {
        accountInfo ? <Route path = "/accountInfo" element = {<AccountInfo/>}>Account info</Route>:null
        }
        
        <Route path = "/flights" element = {<Flights/>}>Flights</Route>

        <Route path = "/searchFlightsResults" element = {<SearchFlightsResults/>}>searchFlightsResult</Route>

        </Routes>
        
            </nav>
            
    )
}

export default Navbar;