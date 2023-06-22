import React, { useEffect, useState } from "react";
import axios from "axios";

function UserProfile({loggedInEmailId}){

    const [userProfileInfo,setUserProfileInfo] = useState([])

    useEffect(()=>{
        console.log(loggedInEmailId)

        axios.post(`http://localhost:3001/myProfileFetch`,{loggedInEmailId:loggedInEmailId}).then((res)=>{
            console.log(res.data.ProfileData);
            setUserProfileInfo(res.data.ProfileData)
        })
    },[loggedInEmailId])

    return(
        <div>
            {
                userProfileInfo.map((val)=>{
                    return(
                        <div>
                            <p>Name : {val.name}</p>
                            <p>Password : {val.password}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default UserProfile