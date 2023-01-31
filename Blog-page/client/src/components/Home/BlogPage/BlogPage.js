import axios from "axios";
import React, { useEffect,useState } from "react";
import "./individualBlogPage.css"
import image from "./images/pexels-pixabay-270360.jpg"

function BlogPage({blogNo}){

    const [showIndividualBlogData,setShowIndividualBlogData] = useState([])

    useEffect(()=>{
        
        const savedBlogNo = localStorage.getItem("SaveBlogNo")


        axios.get(`http://localhost:3001/fetch/${savedBlogNo}`).then((res)=>{
            console.log(blogNo);
            setShowIndividualBlogData(res.data)
        })

        
    },[blogNo])

    return(
        <div>
{
    showIndividualBlogData.map((val)=>{
        return <div className="blog-page-container">
           <h2> {val.title}</h2>
           <span>By {val.author}</span>
           <br></br>
           <img src= {image}/>
           <p> {val.content}</p>
        </div>
    })
}
<br></br>
        </div>
    )
}

export default BlogPage;