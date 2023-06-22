import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import LogIn from "./components/log-in/LogIn";
import SignUp from "./components/sign-up/SignUp";

function App(){
	return(
		<div>
<Router>

<Link to ="/LogIn">LogIn / </Link>
<Link to ="/SignUp">SignUp</Link>

	<Routes>

<Route path="/LogIn" element={<LogIn/>}/>
<Route path="/SignUp" element={<SignUp/>}/>

	</Routes>

	</Router>

		</div>
	)
}

export default App;