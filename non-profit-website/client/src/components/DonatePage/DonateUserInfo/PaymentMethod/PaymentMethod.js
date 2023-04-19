import react, { useEffect } from "react"
import { useState } from "react"
import "./PaymentMethod.css" 
import axios from "axios"

function PaymentMethod({showErrorMessage,setShowErrorMessage,amountValue,setAmountValue,firstName,lastName,email,address,phone,state,city,zipcode}){


    console.log(firstName)
    function Price(e){
        // console.log(e.target.value.match(/(\d+)/)[0])
        setAmountValue(e.target.value.match(/(\d+)/)[0])
    }
    const showPaymentDialogBox = (data) =>{
        console.log(data)
        const options = {
            key:"rzp_test_XkDeMiDaDklURU",
            amount:data.amount,
            name:"Forest Org",
            description:"DONATION",
            order_id:data.id,
            image:"https://www.flaticon.com/free-icon/tree_685076?term=tree&page=1&position=22&origin=search&related_id=685076",
            handler: async (response) => {
				try {
					const verifyUrl = `http://localhost:3002/payment/verify`;
            		const { data } = await axios.post(verifyUrl, response);
					console.log(response)
					console.log(data);
                    axios.post(`http://localhost:3002/payment/sendDetails`,{order_id:response.razorpay_order_id,firstName:firstName,lastName:lastName,email:email,address:address,phone:phone,state:state,city:city,zipcode:zipcode}).then((res)=>{
                        console.log(res);
                    })
				} catch (error) {
					console.log(error);
				}
                
			},
            theme:{
                "color": "#00E676"

            }
        }
        const razorpayDialogBox = new window.Razorpay(options)
        razorpayDialogBox.open();
    }

    // const arr = [firstName,lastName,email,address,phone,state,city,zipcode]

    const paymentPriceInput = document.querySelector(".payment-price-input")

    const handlePayment = async(e) =>{
        e.preventDefault()
    
            if(firstName === "" || lastName === ""  ){
                setShowErrorMessage("FILL YOUR FIRST NAME AND LAST NAME")
            }else if(state === "" || city === ""){
                setShowErrorMessage("FILL UP YOUR STATE AND CITY")
            }else if(address.length < 8){
                setShowErrorMessage("FILL UP YOUR ADDRESS")
            }else if(phone.length !== 10 ){
                setShowErrorMessage("FILL UP YOUR PHONE NO.")                
            }else{
                setShowErrorMessage("")
                // if(paymentPriceInput){
                //     paymentPriceInput.style.focus.background ="red";
                // }
                 await axios.post(`http://localhost:3002/payment/orders`,{amount:amountValue}).then((response)=>{
                     console.log(response.data.data)
                     showPaymentDialogBox(response.data.data)
             
                 })
             
                }
            }
        
const [test,setTest] = useState(true);

useEffect(()=>{
    if(amountValue !== 0){
        setTest(true)
    }else{
        setTest(false);
    }
},[amountValue])


    return(
    <div className="all-payment-prices-div">
 
<form className="all-payment-prices-div-form">
                <input placeholder="yo" value="₹200" type="text" className="payment-price-input" onClick={Price}/>
                <input value="₹500" type="text" className="payment-price-input" onClick={Price}/>
                <input value="₹1000" type="text" className="payment-price-input" onClick={Price}/>
                <input value="₹5000" type="text" className="payment-price-input" onClick={Price}/>
                <input value="₹10000" type="text" className="payment-price-input" onClick={Price}/>
                <input placeholder="Enter Amount" type="number" onChange={Price}/>

<div className="pay-button-container"><button className="pay-button" onClick={handlePayment}>
    Donate $ 
{/* {
test ? `${amountValue}`: "hello"
}  */}

{
    test && `${amountValue}`
}

</button>
</div>
</form>

</div>
)
}

export default PaymentMethod;