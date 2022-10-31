import React from "react";
import "./Home.css"
import ServiceSection from "./HomeComponents/Service/ServiceSection"; 
import Header from "./HomeComponents/Header/Header";
import Footer from "./HomeComponents/Footer/Footer";
import About from "./HomeComponents/About/About";


function Home(){


    return(

        <div>
         
        <div className="home-section">
    
<Header/>
<ServiceSection/>        
<About/>

<Footer/>

</div>
        </div>
    )
}

export default Home;