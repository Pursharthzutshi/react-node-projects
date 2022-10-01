import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from "../src/components/Home/Home"
import SendDetails from "../src/components/SendDetails/SendDetails"

function App() {
  return (
    <div className="App">

<h2>Employee Managment System</h2>
<Router className="router">

<Link className="page-links" to ="/Home">Home </Link>
<Link className="page-links" to ="/SendDetails">Send</Link>
<Routes>
  <Route path = "/Home" element = {<Home/>}></Route>
  <Route path = "/SendDetails" element = {<SendDetails/>}></Route>
</Routes>

</Router>




    </div>
  );
}

export default App;
