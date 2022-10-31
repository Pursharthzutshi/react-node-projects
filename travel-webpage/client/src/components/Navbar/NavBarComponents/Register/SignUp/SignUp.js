import React,{useState} from "react";
import "./SignUp.css"
import axios from "axios"

function SignUp(){

    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [emailID,setEmailID] = useState("")
    const [phoneNo,setPhoneNo] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")

    const [showSignUpMsg,setShowSignUpMsg] = useState("");

const register = ()  =>{ 
    axios.post(`http://localhost:3002/insert`,{name:name,age:age,emailID:emailID,phoneNo:phoneNo,password:password,confirmPassword:confirmPassword}).then((response)=>{
    if(response.data.message){
        setShowSignUpMsg(response.data.message)
        console.log(response.data.message)
        }
        
    })
}
    const submitForm = (e) =>{
        e.preventDefault();
    }

    return(
        <div className="sign-up-section">

<div className="left-side-container">

    <div className="sign-up-form-container">
    <h2>Sign Up</h2>
    <div className="circle"></div>
    <div className="circle-two"></div>
    <div className="sign-up-line"></div>
    
    <br></br>

        <form onSubmit={submitForm} className="sign-up-form">
   
    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Full-Name" type="text"/>
    <input onChange={(e)=>{setAge(e.target.value)}} placeholder="Age" type="text"/>
    <input onChange={(e)=>{setEmailID(e.target.value)}} placeholder="Email-ID" type="email"/>
    <input onChange={(e)=>{setPhoneNo(e.target.value)}} placeholder="Phone-No" type="number"/>
    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password" type="password"/>
    <input onChange={(e)=>{setConfirmPassword(e.target.value)}} placeholder="Confirm Password" type="password"/>
   
    <button onClick={register}>Register</button>
    {
    showSignUpMsg
    }
    
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

export default SignUp;