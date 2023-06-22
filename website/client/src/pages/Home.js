import React from "react"
import "../pages/Home.css"
import Navbar from "../pages/Navbar/Navbar"
import Header from "../pages/Header/Header"
import Service from "../pages/Service/Service"
import Testimonials from "../pages/Testimonials/Testimonials"
import AboutUs from "../pages/AboutUs/AboutUs"
import Footer from '../pages/Footer/Footer'

function Home(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <Service/>
            <AboutUs/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}

export default Home