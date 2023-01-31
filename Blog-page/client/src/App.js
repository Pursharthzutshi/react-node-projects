import './App.css';
import { BrowserRouter as Router,Routes,Link, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import WriteBlog from './components/WriteBlog/WriteBlog';
import "../src/components/BlogPage.css"
import LogoImage from "../src/images/blogging.png"
import AboutUs from './components/AboutUs/AboutUs';
import BlogPage from './components/Home/BlogPage/BlogPage';
import { useEffect, useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import axios from 'axios';
import "./AppResponsive.css"

function App() {

  const [blogNo,setBlogNo] = useState("")
  const [showLogInStatus,setShowLogInStatus] = useState("")
  const [showLogOut,setShowLogOut] = useState(true)

  const [logOutButton,setLogOutButton] = useState(false);

  const [navToHomePage,setNavToHomePage] = useState(false);

  const [showWelcomeBackMsg,setShowWelcomeBackMsg] = useState(false);

  const [showNavButton,setShowNavButton] = useState(false);

  const [showNavigationMenu,setShowNavigationMenu] = useState(false);

  const logOut = ()=>{
    axios.get(`http://localhost:3001/logout`).then((response)=>{
      console.log(response);
      setShowLogOut(true)
      localStorage.removeItem("showLogOut")
      setNavToHomePage(true)
    })
  }

  const showNavBar = ()=>{
    setShowNavigationMenu(true)
  }

  
  axios.defaults.withCredentials = true
    
  useEffect(()=>{
        
    axios.get(`http://localhost:3001/logInUsers`).then((res)=>{
        if(res.data.loggedIn === true){
            setShowLogInStatus(res.data.user[0].name)
            setShowWelcomeBackMsg(true)
        }else{
          setShowLogInStatus("")
        }   

    })
})

  return (
    <div className="App">

      <div className="logo-div">
        
        <h3>MyBlogs</h3>
        <img className="logo-image" src={LogoImage}/>

  {showNavigationMenu && 
  <div>
    <Router>
    <Link className="res-nav-bar-links" to="/">Home</Link>
  <Link className="res-nav-bar-links" to="/aboutUs">About Us</Link>
  {
    showLogOut?"":<Link className="res-nav-bar-links" to="/writeBlog">Write Blog</Link>
  }
  <Link className="res-nav-bar-links" to="/signUp">Sign Up</Link>
 
  {showLogOut ?
  <Link className="res-nav-bar-links" to="/login">LogIn</Link>:
  <Link onClick={logOut} className="res-nav-bar-links" to="/logout">
    LogOut
    </Link>
    }
    </Router>
  </div>
  }

        </div>

<div className='nav-button-div'>

<button onClick={showNavBar} className='nav-button'>Nav Bar</button>

</div>


<Router className="nav-bar-links-container">

<div className="nav-bar">
  <Link className="nav-bar-links" to="/">Home</Link>
  <Link className="nav-bar-links" to="/aboutUs">About Us</Link>
  {
    showLogOut?"":<Link className="nav-bar-links" to="/writeBlog">Write Blog</Link>
  }
  <Link className="nav-bar-links" to="/signUp">Sign Up</Link>
 
  {showLogOut ?
  <Link className='nav-bar-links' to="/login">LogIn</Link>:
  <Link onClick={logOut} className='nav-bar-links' to="/logout">
    LogOut
    </Link>
    }
   <Routes>
    <Route path="/" element={<Home showLogInStatus={showLogInStatus} showWelcomeBackMsg={showWelcomeBackMsg} blogNo={blogNo} setsBlogNo = {setBlogNo}/>}></Route>
    <Route path = "/writeBlog" element = {<WriteBlog showLogInStatus={showLogInStatus}/>}></Route> 
    <Route path = "/aboutUs" element = {<AboutUs/>}></Route>
    <Route path = "/blog/" element = {<BlogPage blogNo = {blogNo}/>} ></Route>
    <Route path = "/signUp" element = {<SignUp/>}></Route>
    <Route path = "/login" element={<LogIn setShowWelcomeBackMsg={setShowWelcomeBackMsg} showLogOut={showLogOut} setLogOutButton={setLogOutButton} showLogInStatus={showLogInStatus} setShowLogOut={setShowLogOut} setShowLogInStatus = {setShowLogInStatus}/>}></Route>:

    <Route path = "/logout" element={<LogIn setLogOutButton={setLogOutButton} showLogInStatus={showLogInStatus} setShowLogOut={setShowLogOut} setShowLogInStatus = {setShowLogInStatus}/>}></Route>:

  </Routes>
  </div>
</Router>

    </div>
  );
}

export default App;
