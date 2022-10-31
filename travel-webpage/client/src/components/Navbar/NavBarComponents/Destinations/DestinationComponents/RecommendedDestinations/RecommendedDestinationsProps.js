import React, { useState } from "react";
import images from "../images/pexels-pixabay-532826.jpg"


function RecommendedDestinationsProps(props){
    const [showTourDesc,setShowTourDesc] = useState(false)

    function changingSlide(){
        setShowTourDesc(!showTourDesc);
    }

    return(
        <div className="recommendations-div">
            
            <img className="image" src={images}/>
            
            {showTourDesc &&<div className="tour-desc-div"> <p>{props.TourDesc}</p>            </div>
}
            <button className="view-rating-button" onClick={changingSlide}>View Rating</button>
            
            <div>
            <h1>{props.place}</h1>
            <p>{props.desc}</p>
            </div>

            <div className="our-recommended-buttons-div">
            <button>More Info</button>
            <button>View About Plan</button>
            </div>
        </div>
    )
}


export default RecommendedDestinationsProps;