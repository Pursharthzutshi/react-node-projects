import './App.css';
import NavBar from './components/Navbar/Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
  return (
    <div>
      
    <Router>
        
        <Link to ="/home">Home</Link>    
        <Routes>
            <Route path = "/home" element = {<NavBar/>}>Home</Route>
        </Routes>
            </Router>
        
      <NavBar/>
    </div>
  );
}

export default App;
