import {useEffect, useState} from "react";
import axios from "axios";
import "../Employee/Employees.css"
// import { TrashOutline } from 'react-ionicons'
// import { Pencil } from 'react-ionicons'


function Employees(){
    
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [position,setPositon] = useState("");
    const [showDetail,setShowDetails] = useState([])

    // const [changePostion,setChangePosition] = useState("");

    // const [id,setId] = useState("")

    //Update Values

    const [updateName,setUpdateName] = useState("");
    const [updateAge,setUpdateAge] = useState("");
    const [updatePosition,setUpdatePosition] = useState("");

    const [showUpdatingInputVal,setShowUpdatingInputVal] = useState(false);

    const [dataSendMsg,setDataSendMsg] = useState(false);

  const Post = () =>{
      axios.post(`http://localhost:3000/send`,{ name:name,age:age,position:position
}).then((response)=>{
        console.log(response.data.name);
    })
    setDataSendMsg(true)
}

useEffect(()=>{ 
        axios.get(`http://localhost:3000/get`).then((response)=>{
            console.log(response.data);
            setShowDetails(response.data);
        })
    
},[])

const Delete = (id) =>{
    axios.delete(`http://localhost:3000/delete/${id}`).then((response)=>{
        console.log(response);
    })
}

const update = (id) =>{
    axios.put(`http://localhost:3000/update`,{id:id,updateName:updateName,updateAge:updateAge,updatePosition:updatePosition}).then((response)=>{
        console.log(response);
    })
    
}


    function formSubmit(e){
        e.preventDefault();
    }

    const showInputVal = () =>{
        setShowUpdatingInputVal(!showUpdatingInputVal)
    }


    return(
        <div className="">

<form onSubmit={formSubmit}>

{dataSendMsg && 
<div className="data-send-div-container">
<div className="data-send-div">
    <h3>Data Send</h3>
    </div>
</div>
}
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

{
    showDetail.map((data)=>{
      return (
        <div className="employee-detail-container">
        <div className="employee-detail-div">
        <div className="all-employee-info-container">
<div className="all-employee-info-div">

    <table>
    <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
            
            </tr>
            <tr>

            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.position}</td>
            
            </tr>
            <div className="delete-update-div">
            <button className="send-details-button" onClick={()=>{Delete(data.id)}}>Delete</button>
</div>

            </table>
            <button className="send-details-button" onClick={showInputVal}>Update</button>

            {showUpdatingInputVal && 
            <div className="update-input-div">
            <input className="update-input" placeholder="Update Name" type="text" onChange={(e)=>{setUpdateName(e.target.value)}}/>
            <input className="update-input" placeholder="Update Age" type="number" onChange={(e)=>{setUpdateAge(e.target.value)}}/>
            <input className="update-input" placeholder="Update Position" type="text" onChange={(e)=>{setUpdatePosition(e.target.value)}}/>
            <div>
            <button className="send-details-button" onClick={()=>{update(data.id)}}>Update Values</button>
</div>
                </div>}
        </div>
        </div>       
        </div>
    </div>
      )  
    })
}        </div>
    )
}

export default Employees;