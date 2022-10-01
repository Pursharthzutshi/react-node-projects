import React from "react";
import axios from "axios";
import { useState } from "react";
import "../../components/main.css"


function SendDetails(){
      
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [position,setPositon] = useState("");

    const [dataSendMsg,setDataSendMsg] = useState(false);
    
    const [showNotFillMsg,setShowNotFillMsg] = useState("");

  const Post = () =>{
    axios.post(`http://localhost:3000/send`,{ name:name,age:age,position:position
}).then((response)=>{
      console.log(response.data.name);
      if(response.data.message){
        setShowNotFillMsg(<p className="pleass-fill-up-msg">Please Fill Up</p>)
        setDataSendMsg(false)
  
    
    }else{
    setTimeout(function(){
        setShowNotFillMsg("")
        setDataSendMsg(true)
            
    },200)
    
    setTimeout(function(){
        setDataSendMsg(false)

            
    },3000)
}
})
  
  

}


function formSubmit(e){
    e.preventDefault();
}

    return(
<div>
    <h2>Send Details</h2>

{
    dataSendMsg?
    <div className="show-msg-div-container">
    <div className="data-send-div">
        <h3>Data Send</h3>
        <div className="data-send-div-line"></div>
        </div>
    </div>:showNotFillMsg
}

    

<form onSubmit={formSubmit}>

<br></br>

<div className="send-input-div-container">
<div className="send-input-div">
            <input className="send-input-details" placeholder="Name" type="text" onChange={(e)=>{setName(e.target.value)}}/>
       <br></br>
            <input className="send-input-details" placeholder="Age" type="text" onChange={(e)=>{setAge(e.target.value)}}/>
            <br></br>
       
            <input className="send-input-details" placeholder="Postion" type="text" onChange={(e)=>{setPositon(e.target.value)}}/>
</div>
</div>
<br></br>
<button className="send-details-button" onClick={Post} type="submit">Send Details</button>


</form>

</div>
    )
}
export default SendDetails;