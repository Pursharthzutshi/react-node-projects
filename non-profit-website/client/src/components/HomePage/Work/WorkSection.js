import React from "react";
import "./WorkSection.css"
import draggableImage from "../images/pexels-pixabay-51951.jpg"
import WorkSectionData from "./workSectionData";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function WorkSection(){
    let carousel = document.querySelector(".work-section-draggable-div");
 
    function showImage(e){
 
        let draggableImageWidth =  640

   
        if(e.target.parentElement.id === "left-btn"){
            carousel.scrollLeft -= draggableImageWidth         
        }else if(e.target.parentElement.id === "right-btn"){     
            carousel.scrollLeft += draggableImageWidth   
        }
    }

    let PrevPageValue;
    let PrevCarouselScrollValue

    function pageEventsValues(e){
        PrevPageValue = e.pageX 
        PrevCarouselScrollValue = carousel.scrollLeft
    }

    const dragImage = (e)=>{
        
       let currentPageValue = e.pageX
       let pageValueDifference = currentPageValue - PrevPageValue;
       carousel.scrollLeft = PrevCarouselScrollValue - pageValueDifference
    }

    return(
        <div className="work-section">
            <h2>Our Work</h2> 
                 <div className="work-section-inner-container">
      
            {/* <i id="fi fi-rr-angle-circle-right"></i> */}
            <button onClick={showImage} className="icon-btn" id="left-btn">
            <FaRegArrowAltCircleLeft id='left-btn' onClick={showImage}>
           
            </FaRegArrowAltCircleLeft>
        
            </button>
            <div onMouseDown={pageEventsValues}  className="work-section-draggable-div">
                
                {
                WorkSectionData.map((val)=>{
                    return(
                        <div>
                            <img src={draggableImage} className="first-image"></img>
                            <h3 >{val.title}</h3>
                            <p>{val.content}</p>
                        </div>
                    )
                })
                }
            </div>
            <button onClick={showImage} className="icon-btn" id="right-btn">
            <FaRegArrowAltCircleRight id='right-btn' onClick={showImage}>
    

            </FaRegArrowAltCircleRight>
            </button>   
            {/* <i onClick={showImage} class="fi fi-rr-angle-circle-right"></i> */}
            </div>
        </div>
    )
}

export default WorkSection