import React from "react";
import {useState,useEffect} from "react";
import axios from "axios";
import "../AccountInfo/AccountInfo.css"

function AccountInfo(){
    const [getloginId,setGetLoginId] = useState("");
    const [showData,setShowData] = useState([]);

useEffect(()=>{
    axios.get(`http://localhost:3002/login`).then((response)=>{
         setGetLoginId(response.data.user[0].id)
         console.log(response.data.user[0].id)
},[])

})

useEffect(()=>{
    
    axios.get(`http://localhost:3002/fetch/${getloginId}`).then((response)=>{
            
        setShowData(response.data)
        console.log(response.data)
    })
}, [getloginId])
    
    return(
        
<div className="account-info-page"> 
         {
         showData.map((val)=>{
            return(
                <div>
                    <h2>Account Info</h2>

                    <h3>Personal Info -:</h3>
       
                <div className="account-info-input-div-container">
                <div className="account-info-input-div">
             
             <h4>Name : </h4>
             <input value={val.name}/>
            
             </div>

             <div className="account-info-input-div">
             
             <h4>Age:</h4>
             <input value={val.age}/>
            
             </div>

        <div className="account-info-input-div">
             
             <h4>Email : </h4>
             <input value={val.emailID}/>
            
             </div>

             <div className="account-info-input-div">
             
             <h4>Phone No:</h4>
             <input value={val.phoneNo}/>
            
             </div>

            

                    </div>
                    </div>
            )
         })
         }   


</div>
    )
}

export default AccountInfo;