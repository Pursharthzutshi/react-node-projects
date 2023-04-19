import './App.css';
import { BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from "../src/Home"
import HomePage from './HomePage';
import { useState } from 'react';
import Donate from "../src/DonatePage"
import DonateUserInfoSection from './components/DonatePage/DonateUserInfo/DonateUserInfoSection';
import ContactUs from "./components/ServicesPage/ContactUs/ContactUs";

function App() {
  
  const [showItem,setShowItem] = useState(false);
  const [effect,setEffect] =  useState("")

  //  useEffect(()=>{
  //     setEffect(console.log("Home"))
  // },[])

  const scrollEvent = ()=>{
      console.log("hello")
}


  return (
    <div onScroll={scrollEvent} className="App">

      <BrowserRouter>

<Routes>
<Route path ="/" element={<HomePage/>}/>

        <Route path ="/Home" element={<Home/>}/>
        <Route path ="/Donate" element={<Donate/>}/>
        <Route path ="/ContactUs" element={<ContactUs/>}/>
       
        </Routes>
      </BrowserRouter>

</div> 
  
  );
}

export default App;
