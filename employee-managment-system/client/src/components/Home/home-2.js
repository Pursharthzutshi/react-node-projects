import {useEffect, useState} from "react";
import axios from "axios";
import "../Home/Home.css"
import "../../components/main.css"
// import { TrashOutline } from 'react-ionicons'
// import { Pencil } from 'react-ionicons'


function Home(){
    
    const [showDetail,setShowDetails] = useState([])


    //Update Values

    const [updateName,setUpdateName] = useState("");
    const [updateAge,setUpdateAge] = useState("");
    const [updatePosition,setUpdatePosition] = useState("");

    const [showUpdatingInputVal,setShowUpdatingInputVal] = useState(false);

    const [dataDeleteMsg,setDataDeleteMsg] = useState(false);
    const [dataUpdateMsg,setDataUpdateMsg] = useState(false);

    const [search,setSearch] = useState("");

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
    setDataDeleteMsg(true)

    setDataUpdateMsg(false)
    
    alert("Are You Sure ")

    setTimeout(function(){
    window.location.reload(1);
},500)
}

const update = (id) =>{
    axios.put(`http://localhost:3000/update`,{id:id,updateName:updateName,updateAge:updateAge,updatePosition:updatePosition}).then((response)=>{
        console.log(response);
    })

    setDataUpdateMsg(true)    


    setTimeout(function(){
        setDataUpdateMsg(false)    
    },1000)
    
    
    setDataDeleteMsg(false)
}


    const showInputVal = () =>{
        setShowUpdatingInputVal(!showUpdatingInputVal)
    }


    return(
        <div className="">
            <div className="">

                <input onChange={(e)=>{setSearch(e.target.value)}} type="text"/>

            </div>
<br></br>
{
    dataDeleteMsg &&
    
    <div className="show-msg-div-container">

    <div className="data-delete-div">
    <h3>Data Deleted</h3>
    <div className="data-delete-div-line"></div>
    </div>
</div>
}

{
    dataUpdateMsg &&
    <div className="show-msg-div-container">

    <div className="data-update-div">
        <h3>Data Updated</h3>
        <div className="data-update-div-line"></div>
    </div>
</div>
}

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
            
            </table>
            <button className="send-details-button" onClick={showInputVal}>Update</button>
            <div className="delete-update-div">
            <button className="send-details-button" onClick={()=>{Delete(data.id)}}>Delete</button>
            </div>

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

export default Home;