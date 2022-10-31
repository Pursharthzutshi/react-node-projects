import React from "react";
import FaqAccordionData from "./FaqAccordionData";
import "./FaqAccordion.css";
import {useState} from "react";

function FaqAccordion(){

    const [answer,setAnswer] = useState(false);
    
    const [changeIcon,setChangeIcon] = useState(false);

    function showAns(data){

        if(answer){
           return (setAnswer(false),
           setChangeIcon(false))
        }
        setAnswer(data);
        setChangeIcon(!changeIcon);
}

    return(
        <div className="faq-accordion">
                    <h3>FAQ</h3>

            {
                FaqAccordionData.map((val)=>{
                    return(
                        <div className="accordion-div-container">
                        <div className="accordion-div">
                            {val.ques}
                            <button onClick={()=>{showAns(val.ques)}}>{changeIcon?"-":"+"}</button>
                        </div>
                        {
                        answer === val.ques && 
                        <div className="answer-div-box">
                        <p>{val.answer}</p>
                        </div>
                        }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FaqAccordion;