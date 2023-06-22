import React, { useEffect, useState } from "react";
import axios from "axios"
import OrderPurchasedPageDetails from "./OrderPurchasedPageDetails";
import { Link } from "react-router-dom";
import ReactTable from "react-table";  


function OrderPurchasedPage({orderLoggedInEmailID}){

    const [orderDetails,setOrderDetails] = useState([])
    const [showOrder,setShowOrder] = useState(false)
    const [orderPurchasedEmailID,setOrderPurchasedEmailID] = useState("")

    useEffect(()=>{
        let emailID  = localStorage.getItem("loggedInEmailID") 
        setOrderPurchasedEmailID(emailID)
        console.log(orderPurchasedEmailID)

        axios.post(`http://localhost:3001/FetchOrders/fetchOrderPurchasedData`,{orderPurchasedEmailID:orderPurchasedEmailID}).then((res)=>{
console.log(res.data)
            if(res.data.data){
                setShowOrder(true);
                setOrderDetails(res.data.data)

            }else {
                setShowOrder(false);
                setOrderDetails("Please Sign In First, Go back to Home Page")
            }
        })
    },[orderPurchasedEmailID])
    

    return(
    <div>
        <h4>asdasd</h4>
        <h4>My Orders</h4>
{/* 
        <ReactTable
        data = {1}
        columns={1}
        defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
        /> */}

{
showOrder?
orderDetails.map((val)=>{
    return  <OrderPurchasedPageDetails orderLoggedInEmailID={orderLoggedInEmailID} val={val}/>

})
:<p>{orderDetails}<Link to="/"/></p>

}
    </div>
    )
        
}

export default OrderPurchasedPage