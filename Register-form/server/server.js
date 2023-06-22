const express = require("express");
const app = express();
const port = 3001;
const mysql= require("mysql");
const bodyParser = require("body-parser")
const cors = require("cors");
var bcrypt = require('bcrypt');
const saltRounds = 10;
var cookieParser = require('cookie-parser')
const session = require('express-session')
const jwt = require('jsonwebtoken');


app.use(cors({
    origin:"http://localhost:3000",
    method:["GET","POST"],
    credentials:true

}))

app.use(cors({origin: true, credentials: true}));

app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(session({
    key:"userId",
    secret:"registerSecret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*30*30,
    }
}))


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3307,
    database:"UserForm"
})

db.connect((err)=>{
    if(err){
        console.log(err)
    }
})

app.get("/createDatabase",(req,res)=>{
    const sql = `create database userForm`

    db.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("DATABASE CREATED");
    })
})

app.get("/createRegisterTable",(req,res)=>{
    const sql = `create table register(id int not null auto_increment,emailId varchar(100),name varchar(100),password varchar(100),primary key(id))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("Table is created")

    })

})


app.get("/deleteTable",(req,res)=>{
    const sql = `drop table register`

    db.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("Table is Deleted")

    })

})

app.post("/Register",(req,res)=>{

    const emailId = req.body.emailId
    const name = req.body.name
    const password = req.body.password
    // const reCheckPassword = req.body.reCheckPassword
    
    // const passwordHashed = [password,reCheckPassword] 

    bcrypt.hash(password,saltRounds,(err,hashedPasswords)=>{
        if(err){
            console.log(err)
        }

        const sql = `insert into register (emailId,name,password) values ("${emailId}","${name}","${hashedPasswords}")`      

        db.query(sql,(err,results)=>{
            if(err){
                console.log(err)
            }
            res.send(results);
        })
    })
    })

    app.get("/Login",(req,res)=>{
        if(req.session.user){
            res.json({LoggedIn:true,user:req.session.user})
        }else{
            res.json({LoggedIn:false})
        }
    })

app.post("/Login",(req,res)=>{

        const emailId = req.body.emailId
        const password = req.body.password
    
        const sql = `select * from register where emailId = ?`

        db.query(sql,[emailId],(err,results)=>{

            if(results.length>0){

                bcrypt.compare(password,results[0].password,(err,response)=>{
                    if(err){
                        console.log(err);
                    }
                    if(response){
                        console.log("Logged In")
                        req.session.user = results
                        console.log(req.session.user)
                        res.json(results);    
                    }else{
                        res.send({message:"Wrong username"})
                    }
                })

            }
        })
        
        // db.query(sql,[emailId],(err,results)=>{
        //     if(err){
        //         console.log(err)
        //     }
        //     if(results.length > 0){
        //         bcrypt.compare(password,results[0].password,(err,response)=>{
        //             if(err){
        //                 console.log(err);
        //             }
        //             if(response){
        //                 req.session.user = results
        //                 res.json(results);
        //                 console.log(response);
        //             }
        //         })
        //     }
        // })
    })
    


app.listen(port,()=>{
    console.log(`${port} is running`)
})