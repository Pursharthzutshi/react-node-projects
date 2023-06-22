import './App.css';
import { BrowserRouter as Router,Routes,Link, Route, Navigate} from 'react-router-dom';
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
import UserProfile from "../src/components/UserProfile/UserProfile"
function App() {

  const [blogNo,setBlogNo] = useState("")
  const [showLogInStatus,setShowLogInStatus] = useState("")
  // const [showLogOut,setShowLogOut] = useState(true)

  const [loggedInEmailId,setLoggedInEmailId] = useState("");

  const [navToHomePage,setNavToHomePage] = useState(false);

  const [showWelcomeBackMsg,setShowWelcomeBackMsg] = useState(false);

  const [showNavigationMenu,setShowNavigationMenu] = useState(false);

  const [logOutButton,setLogOutButton] = useState(false);

  useEffect(()=>{
    const userLoginState = JSON.parse(localStorage.getItem("setLogOutButton"))
    setLogOutButton(userLoginState)

  },[logOutButton])


//   useEffect(()=>{
//   setLoggedInEmailId(response.data[0].EmailId)
// })

  const logOut = ()=>{
    axios.get(`http://localhost:3001/logout`).then((response)=>{
      console.log(response);
      setNavToHomePage(true)
      setLogOutButton(false)
      setLoggedInEmailId("")
      localStorage.setItem("setLogOutButton","false")
    })
  }

  const showNavBar = ()=>{
    setShowNavigationMenu(true)
  }

  const hideNavBar = ()=>{
    setShowNavigationMenu(false)
  }
  
  axios.defaults.withCredentials = true
    
  useEffect(()=>{
        // localStorage.setItem("showLogOut",true)
    axios.get(`http://localhost:3001/logInUsers`).then((res)=>{
      console.log(res.data.user[0].EmailId)
        if(res.data.loggedIn === true){
            setShowLogInStatus(res.data.user[0].name)
            setShowWelcomeBackMsg(true)
            setLoggedInEmailId(res.data.user[0].EmailId)
        }else{
          setShowLogInStatus("")
          // setLoggedInEmailId("")
        }   

    })
})

  return (
    <div className="App">

      <div className="logo-div">

        <h3>MyBlogs</h3>
        <img className="logo-image" src={LogoImage}/>
        </div>
      {loggedInEmailId}

<div className='nav-button-div'>

<button onClick={showNavBar} className='nav-button'>Nav Bar</button>

</div>

<Router className="nav-bar-links-container">
  <div>
<Link className="nav-bar-links" to="/">Home</Link>
  <Link className="nav-bar-links" to="/aboutUs">About Us</Link>


  <Link className="nav-bar-links" to="/signUp">Sign Up</Link>
  </div>
  <br></br>
  <div className='log-out-div'>
  {
  logOutButton ?
  <div>
<Link className="nav-bar-links" to="/writeBlog">Write Blog</Link>

<Link  className='nav-bar-links' to="/myProfile"> My Profile</Link>

<Link onClick={logOut} className='nav-bar-links' to="/logout"> LogOut</Link>

</div>

:
    <Link className='nav-bar-links' to="/login">LogIn</Link>

  }
    </div>


<div className="nav-bar">
  
   <Routes>
    <Route path="/" element={<Home showLogInStatus={showLogInStatus} showWelcomeBackMsg={showWelcomeBackMsg} blogNo={blogNo} setsBlogNo = {setBlogNo}/>}></Route>

    <Route path = "/writeBlog" element = {<WriteBlog showLogInStatus={showLogInStatus}/>}></Route> 
    <Route path = "/myProfile" element={<UserProfile loggedInEmailId={loggedInEmailId}/>}></Route>

    <Route path = "/aboutUs" element = {<AboutUs/>}></Route>
    <Route path = "/blog/" element = {<BlogPage blogNo = {blogNo}/>} ></Route>
    <Route path = "/signUp" element = {<SignUp/>}></Route>
    <Route path = "/login" element={<LogIn setShowWelcomeBackMsg={setShowWelcomeBackMsg}  setLogOutButton={setLogOutButton} showLogInStatus={showLogInStatus}  setShowLogInStatus = {setShowLogInStatus}/>}></Route>:
    <Route path = "/logout" element={<LogIn setLogOutButton={setLogOutButton} showLogInStatus={showLogInStatus} setShowLogInStatus = {setShowLogInStatus}/>}></Route>:
  </Routes>
  </div>


</Router>

    </div>
  );
}

export default App;
