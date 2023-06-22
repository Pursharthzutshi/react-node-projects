import React from "react";
import headerLogoDiv from "../../../images/burger.png"
import { BrowserRouter as Router,Link} from 'react-router-dom';
import axios from "axios";


function Navbar({size,setShowCartPaymentPage,showLogOutButton,setShowLogOutButton,setShowUserLoggedIn,loggedInButtonState,setCart}){


    const logOutSession = () =>{
         axios.get("http://localhost:3001/Registration/logout").then((res)=>{
         console.log(res)        
    })    
    setCart([])

    localStorage.setItem("loggedInEmailID",null)
    localStorage.setItem("showLogOutButton","false")
    setShowUserLoggedIn(false)
    setShowLogOutButton(false)
    loggedInButtonState = JSON.parse(localStorage.getItem("showLogOutButton")) 
    console.log(JSON.parse(localStorage.getItem("showLogOutButton")))

    }

    return(
        <nav className="header-nav-bar">
        <ul className="header-nav-bar-links-div">

        <Link className="header-logo-div" to = "/">
        <img src={headerLogoDiv}/>
       <h3>Food Website</h3>
       </Link>
        </ul>
        <div className="header-nav-button-container">
             
            {
            showLogOutButton && 
            <div className="cart-logout-button-div">
                <Link className="order-button" to ="/orderPurchasedPage">Order</Link>
            <Link className="cart-button" onClick={()=>{setShowCartPaymentPage(true)}} to ="/paymentCartPage">Cart {size}</Link> 
             <Link to="/" onClick={logOutSession} className="log-out-button">Log Out</Link>
            </div>
            }

        </div>
    </nav>
    )
}

export default Navbar