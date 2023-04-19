import React, { useEffect } from "react";
import "./DonateUserInfoSection.css" 
import { useState } from "react";
// import PaymentMethodSection from "./PaymentMethod/PaymentMethodSection"
import axios from "axios";
import UserInfo from "./UserInfo/UserInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import { BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';
import headerLogoImage from "../DonateUserInfo/images/logo.png";


function DonateUserInfoSection(){
  const [showErrorMessage,setShowErrorMessage] = useState(false);

        const [amountValue,setAmountValue] = useState(false);

        const [firstName,setFirstName] = useState("")
        const [lastName,setLastName] = useState("")
        const [email,setEmail] = useState("")
        const [address,setAddress] = useState("")
        const [phone,setPhone] = useState("")
        const [state,setState] = useState("")
        const [city,setCity] = useState("")
        const [zipcode,setZipcode] = useState("")



    return(
    <section className="donate-user-info-section">
      <nav className="header-nav">
      <Link className="logo-home-button-link" to="/">
      <div className="logo-div">
            <img src={headerLogoImage}/>
            <h3>NP Website</h3>
            </div>

            </Link>   
         

          </nav>
        <div className="left-sidebar">
        <h3><span>Donation </span>Options</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae fermentum quam. Sed felis erat, malesuada sed finibus vel, dignissim ut nisi.</p>
        </div>
          <div className="payment-prices-user-info-container-section">
          <h3><span>Donation </span>Options</h3>

            <div className="payment-prices-user-info-container">
            
            <UserInfo
            showErrorMessage={showErrorMessage}
             firstName={firstName}
             setFirstName={setFirstName}
             
             lastName={lastName}
             setLastName={setLastName}

             email={email}
             setEmail={setEmail}

             address={address}
             setAddress={setAddress}
             
             phone={phone}
             setPhone={setPhone}
            
             state={state}
             setState={setState}
             
             city={city}
             setCity={setCity}
            
             zipcode={zipcode}
             setZipcode={setZipcode}
            />
            
            <PaymentMethod
            showErrorMessage={showErrorMessage}
            setShowErrorMessage={setShowErrorMessage}
             amountValue={amountValue} setAmountValue={setAmountValue}
             
             firstName={firstName}

             lastName={lastName}
             
             email={email}
             
             address={address}
             
             phone={phone}
             
             state={state}
             
             city={city}
             zipcode={zipcode}/>

            </div>
            </div>
    </section>
        )
}

export default DonateUserInfoSection