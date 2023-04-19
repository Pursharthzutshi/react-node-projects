const router = require("express").Router()
const razorpay = require("razorpay")
const bodyparser = require("body-parser")
const crypto = require("crypto")
const mysql = require('mysql');

router.use(bodyparser.urlencoded({extended:false}))
router.use(bodyparser.json())

router.get("/",(req,res)=>{
    res.send("hello")
})


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password",
    database:"nonProfitWebsiteInfo"    
})

router.get('/createdb',(req,res)=>{
    const sql = `create database nonProfitWebsiteInfo`
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
        res.send("Database created")
    })
})

router.get('/createTable',(req,res)=>{
    const sql = `create table userInfo (order_id varchar(200),first_name varchar(100),last_name varchar(100),email varchar(100),address varchar(300),phone bigint,state varchar(50),city varchar(50),zipcode int,primary key(order_id))`
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
        res.send("Database created")
    })
})


router.get('/dropTable',(req,res)=>{
    const sql = `drop table userInfo`
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
        res.send("Database created")
    })
})

router.post("/sendDetails",(req,res)=>{
    const order_id = req.body.order_id
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const address = req.body.address;
    const phone = req.body.phone;
    const state = req.body.state;
    const city = req.body.city;
    const zipcode = req.body.zipcode
console.log(order_id)
    const sql = `insert into userInfo (order_id,first_name,last_name,email,address,phone,state,city,zipcode) values ("${order_id}","${firstName}","${lastName}","${email}","${address}","${phone}","${state}","${city}","${zipcode}")`

db.query(sql,(err,arr)=>{
if(err){
    console.log(err)
}
console.log(arr);

res.json(arr);
})
})

router.post("/orders",(req,res)=>{

    console.log(req.body.amount)
    const instance = new razorpay({
        key_id:process.env.KEY_ID,
        key_secret:process.env.KEY_SECRET
    })

    const options = {
        amount:req.body.amount *100,
        currency:"INR"
    }
    console.log(options.amount)

    instance.orders.create(options,(error,order)=>{
        if(error){
            res.status(500).json({message:"INVALID"})
            // console.log(error)
        }
        try{
            res.status(200).json({data:order})
        }catch(error){
            res.status(500).json({message:"INVALID"})
            console.log(error)
        }
    })

    console.log(res);
})


router.post("/verify",async (req,res)=>{
    try{

    // const Razorpay_payment_id = req.body.razorpay_payment_id;
    // const Razorpay_order_id = req.body.razorpay_order_id;
    // const Razorpay_signature = req.body.razorpay_signature;

    		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body

	const sign = razorpay_order_id + "|" + razorpay_payment_id;

    console.log(req.body)

	const expectedSign = crypto
	.createHmac("sha256", process.env.KEY_SECRET)
	.update(sign.toString())
	.digest("hex");

    console.log(expectedSign)

	if(razorpay_signature === expectedSign){
	return	res.redirect("http://localhost:3000/")
    
	}else{
        return res.status(400).json({message:"Unsuccessful"})
	}
}catch(error){
    res.status(500).json({message:"server error"})
// console.log(error)
}
})

module.exports =router