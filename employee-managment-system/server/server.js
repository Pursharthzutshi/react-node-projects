const express = require("express");
const app = express();
const port = 3001
const mysql = require("mysql");
const cors = require("cors")
const bodyParser = require("body-parser")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    port:3307,
    database:"managmentSystem",
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors());

db.connect((err)=>{
    if(err){
        console.log(err);
    }
})

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.get("/createDatabase",(req,res)=>{
    
    const sql = `create database managmentSystem`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })

    res.send("Managment System");
})

app.get("/createTable",(req,res)=>{
    const sql = `create table users(id int not null auto_increment,name varchar(50),age int not null,position varchar(50),primary key(id))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Table is created");

})


//POST

app.post("/send",(req,res)=>{

    const name = req.body.name
    const age = req.body.age
    const position = req.body.position

    const sql = `insert into users(name,age,position) values ("${name}","${age}","${position}")`

    if(name === "" || age === "" || position === ""){
        res.json({message:"Please Fill The Details"})
    }else{
        db.query(sql,(err,results)=>{
            if(err){
                console.log(err);
            
            
            }
        res.send(results);
        })
    }



})

//GET


app.get("/get",(req,res)=>{

    const sql = `select * from users`

    db.query(sql,(err,results)=>{
        if(err){
            console.log(err);
        }
        
    res.send(results);
    })

})

//DELETE

app.delete(`/delete/:id`,(req,res)=>{

    const id = req.params.id
    
    const sql = `delete from users where id = ?`

    db.query(sql,id,(err,results)=>{
        if(err){
            console.log(err)
        }
        
    res.send(results)
    })
})

//UPDATE

app.put("/update",(req,res)=>{

    const id = req.body.id
    const updateName = req.body.updateName
    const updateAge = req.body.updateAge
    const updatePosition = req.body.updatePosition

    console.log(id)
    console.log(updateName)
    console.log(updateAge)
    console.log(updatePosition)
    const sql = `update users set name = ?,age = ?, position = ? where id= ? `

    

    db.query(sql,[updateName,updateAge,updatePosition,id],(err,results)=>{

        if(err){
            console.log(err);
        }
        res.send(results);
    })

})

app.listen(port,()=>{
    console.log(`${port} is running`)
})