import './App.css';
import NavBar from './components/Navbar/Navbar';
import {useState,useEffect} from "react";

function App() {

  const [changeLogIn,setChangeLogIn] = useState(false);
  const [accountInfo,setAccountInfo] = useState(false);

  useEffect(()=>{
    const saveRegisterState = localStorage.getItem("changeLogIn");
    const accountInfoState = localStorage.getItem("accountInfo");
    setChangeLogIn(JSON.parse(saveRegisterState))  
    setAccountInfo(JSON.parse(accountInfoState))  
  },[])
    
  useEffect(()=>{     

    localStorage.setItem("changeLogIn",JSON.stringify(changeLogIn));
    localStorage.setItem("accountInfo",JSON.stringify(accountInfo));

  },[accountInfo, changeLogIn])


  return (
    <div>
      <NavBar changeLogIn={changeLogIn} setChangeLogIn={setChangeLogIn} accountInfo={accountInfo} setAccountInfo={setAccountInfo}/>
    </div>
  );
}

export default App;
