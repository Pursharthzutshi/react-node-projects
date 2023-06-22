import "./App.css";
import { Routes, Route } from "react-router-dom";
import CatalogMenuPage from "./components/CatalogMenuPage/CatalogMenuPage";
import HomePage from "./components/HomePage/HomePage";
import { useEffect, useState } from "react";
import ShowCartPaymentPage from "./ShowCartPaymentPage";
import Navbar from "./components/HomePage/Header/Navbar";
import SignUpPage from "./components/Register/SignUpPage";
import LogInPage from "./components/Register/LogInPage";
import axios from "axios";
import OrderPurchasedPage from "./components/CatalogMenuPage/OrderPurchasedPage";

function App() {


  const [welcomeBackMessageTimeInterval,setWelcomeBackMessageTimeInterval] = useState(false);

  const [signUpMessage,setSignUpMessage] = useState(false)

  const [test, setTest] = useState(false);

  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [showCartPaymentPage, setShowCartPaymentPage] = useState(false);
  const [userName, setUserName] = useState("");
  const [showUserLoggedIn, setShowUserLoggedIn] = useState(false);
  const [showUserSignedUp, setShowUserSignedUp] = useState(false);

  const [loggedInEmailID, setLoggedInEmailID] = useState("");

  const [showAddressOption, setShowAddressOption] = useState(false);

  const [savedAddresDialogBox, setSavedAddresDialogBox] = useState(false);

  const [showLogOutButton, setShowLogOutButton] = useState(false);

  const [myOrderButton, setMyOrderButton] = useState(false);

  const [orderLoggedInEmailID, setOrderLoggedInEmailID] = useState("");

  axios.defaults.withCredentials = true;

  
useEffect(()=>{
    setTimeout(()=>{
        setSignUpMessage(false)
          setTest(false)
        setWelcomeBackMessageTimeInterval(false)
    },3000)

})

  useEffect(() => {
    axios.get(`http://localhost:3001/Registration/login`).then((response) => {
      if (response.data.loggedIn === true) {
        setShowUserLoggedIn(true);
      } else {
        setShowUserLoggedIn(false);
      }
    });
  });

  useEffect(() => {
    let loggedInButtonState = JSON.parse(
      localStorage.getItem("showLogOutButton")
    );

    setShowLogOutButton(loggedInButtonState);
  }, []);

  const incOrDecCartItemQuantity = (selectedCartIem, incOrDecBy) => {
  
    setCart((existingCart) => existingCart.map(cartItem => {
      
      if(cartItem.slug === selectedCartIem.slug ) {

        if((cartItem.amount > 1 )){
          return {
            ...cartItem,
            amount: cartItem.amount + incOrDecBy,
          }
        } else if(cartItem.amount === 1 && incOrDecBy === 1){

          console.log(cartItem.amount)
          return {
            ...cartItem,
            amount: cartItem.amount + 1,
          }
        }       
      }

      // else if(cartItem.amount < 1){
      //   return {
      //     ...cartItem,
      //     amount: 1,
      //   }
      // }

      return cartItem;
    }))
  };

  function handleAddItemToCart(cartItem, e) {
  
    const alreadyAddedItems =  cart.find((itemSlug)=>itemSlug.slug === cartItem.slug)
    
    if(alreadyAddedItems){
      setTest(true)
     console.log(alreadyAddedItems)

    }
     else
     {
      setTest(false)
      setCart((existingCart) => [...existingCart, cartItem]);

     }
  // cart.map((val)=>{
//   if(val.slug === cartItem.slug){
//     setCart([])
//   }
// })
//     // console.log(cartItem.findIndex())
//     if(!cartItem){
//       console.log("hello")
//     }else{
    
//     }

  }

  useEffect(() => {
    const totalPrice = cart.reduce((total, cartItem) => {
      return cartItem.amount * cartItem.price + total;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  return (
    <div className="App">
      <Navbar
        setCart={setCart}
        myOrderButton={myOrderButton}
        setShowUserLoggedIn={setShowUserLoggedIn}
        savedAddresDialogBox={savedAddresDialogBox}
        setSavedAddresDialogBox={setSavedAddresDialogBox}
        showAddressOption={showAddressOption}
        setShowCartPaymentPage={setShowCartPaymentPage}
        size={cart.length}
        showLogOutButton={showLogOutButton}
        setShowLogOutButton={setShowLogOutButton}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              showLogOutButton={showLogOutButton}
              showUserSignedUp={showUserSignedUp}
              cart={cart}
            />
          }
        />

        <Route
          path="/signUpPage"
          element={
          <SignUpPage 
          setSignUpMessage={setSignUpMessage} 
          setShowUserSignedUp={setShowUserSignedUp}
           />
          }
        />

         {/* <Route
          path="/logInPage"
          element={
            <LogInPage
              signUpMessage={signUpMessage}
              setLoggedInEmailID={setLoggedInEmailID}
              setUserName={setUserName}
              showUserLoggedIn={showUserLoggedIn}
              setShowUserLoggedIn={setShowUserLoggedIn}
            />
          }
        />  */}

        {showCartPaymentPage && (
          <Route
            path="/paymentCartPage"
            element={
              <ShowCartPaymentPage
  
                orderLoggedInEmailID={orderLoggedInEmailID}
                setShowAddressOption={setShowAddressOption}
                setCart={setCart}
                savedAddresDialogBox={savedAddresDialogBox}
                loggedInEmailID={loggedInEmailID}
                updateItemQuantity={incOrDecCartItemQuantity}
                price={totalPrice}
                cart={cart}
              />
            }
          />
        )}

        {showUserLoggedIn ? (
          <Route
            path="/orderNowPage"
            element={
              <CatalogMenuPage
              welcomeBackMessageTimeInterval={welcomeBackMessageTimeInterval}
               userName={userName}
                itemQuantity={incOrDecCartItemQuantity}
                cart={cart}
                orderLoggedInEmailID={orderLoggedInEmailID}
                size={cart.length}
                test={test}
                setTest={setTest}
                handleClick={handleAddItemToCart}
              />
            }
          />
        ) : (
          <Route
            path="/orderNowPage"
            element={
              <LogInPage
              setWelcomeBackMessageTimeInterval={setWelcomeBackMessageTimeInterval}
              setSignUpMessage={setSignUpMessage}
               signUpMessage={signUpMessage}
                setMyOrderButton={setMyOrderButton}
                showLogOutButton={showLogOutButton}
                setShowLogOutButton={setShowLogOutButton}
                setShowAddressOption={setShowAddressOption}
                setLoggedInEmailID={setLoggedInEmailID}
                setUserName={setUserName}
                showUserLoggedIn={showUserLoggedIn}
                setShowUserLoggedIn={setShowUserLoggedIn}
              />
            }
          />
        )}

        <Route
          path="/orderPurchasedPage"
          element={
            <OrderPurchasedPage orderLoggedInEmailID={orderLoggedInEmailID} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
