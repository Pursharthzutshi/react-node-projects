const express = require("express");
const app = express() ;
const port = 3001
const cors = require("cors")
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password",
    database:"blogsPage"
})

app.use(cookieParser())

app.use(session({
    key:"BlogPageLogin",
    secret:"BlogPageLoginSecret",
    resave:true,
    saveUninitialized:false,
    cookie:{
        expires:60 * 30 * 30
    }    
}))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors({
    origin:["http://localhost:3000"],
    method:["POST","GET"],
    credentials:true
}))

db.connect((err)=>{
    if(err){
    console.log(err);
    }
    console.log("Connection Successful");
})

app.get("/CreateDatabase",(req,res)=>{
    const createDB = `create database blogsPage`
    db.query(createDB,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("Database created")
    })
})

app.get("/CreateTable",(req,res)=>{
    const createTable = `create table HomePageBlogs (id int not null auto_increment,title varchar(100),topic varchar(50),content text(5000),author varchar(100),primary key(id))`
    db.query(createTable,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("Table created")
    })
})


app.get("/insert",(req,res)=>{
    const InsertValues = `insert into HomePageBlogs (title,topic,content) values ("Blog Website using ReactJS","Web Dev","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla porttitor imperdiet massa. Nullam sodales a lectus at tempus. Suspendisse ut aliquet ante, sed suscipit nunc. Aenean euismod risus sapien, in ullamcorper nibh tincidunt sit amet. Quisque feugiat sit amet enim id eleifend. Nullam ligula enim, rutrum nec velit nec, facilisis posuere ligula. Aliquam ac interdum justo. Curabitur at magna rutrum, tempor ex eu, efficitur velit.")`
    db.query(InsertValues,(err)=>{
        if(err){
            console.log(err)
        }
        res.send("Data inserted")
    })
})

app.get("/fetch",(req,res)=>{
    const InsertValues = `select * from HomePageBlogs`
    db.query(InsertValues,(err,results)=>{
        if(err){
            console.log(err)
        }

        res.send(results)
    })
})

app.get("/fetch/:item",(req,res)=>{

    const params = req.params.item

    const InsertValues = `select * from HomePageBlogs where id = ?`
    db.query(InsertValues,params,(err,results)=>{
        if(err){
            console.log(err)
        }
        console.log(results)
        res.send(results)
    })
})

app.get("/createUsersInfo",(req,res)=>{

const table = `create table usersSignUp (id int not null auto_increment,name varchar(100),EmailId varchar(100),password varchar(50),primary key(id))`

    db.query(table,(err,results)=>{
        if(err){
            console.log(err)
        }
        console.log(results)
    })
    res.send("data users send")
})

app.post("/SignUpDataInsert",(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    const reCheckPassword = req.body.reCheckPassword

    const insertSignUpData = `insert into usersSignUp (name,EmailId,password) values ("${name}","${email}","${password}")`

    const emailIdSqlResults = `select * from usersSignUp where EmailId = ?`

    db.query(emailIdSqlResults,[email],(err,emailResults)=>{
    
        if(err){
            console.log(err)
        }
        if(emailResults.length > 0){
            res.send({message:"Email Id Taken"})
            console.log("Email Id Taken")
        }else if(name === "" || email === ""){
            res.send({message:"Email Id or name not filled"})
            console.log("Email Id or name not filled ")
        }else if(password === ""){
            res.send({message:"Password Not Filled"})
            console.log("Password Not Filled")
        }else if(password.length !== reCheckPassword.length){
            res.send({message:"Password Not Matched"})
            console.log("Password Not Matched")
        }else{
            db.query(insertSignUpData,(err,results)=>{
                if(err){
                    console.log(err);
                }
                res.send({results:results});
            })
        }
    })

})

app.get("/logInUsers",(req,res)=>{
    if(req.session.user){
        res.json({loggedIn:true,user:req.session.user})
    }else{
        res.json({loggedIn:false})
    }
})

app.post("/logInUsers",(req,res)=>{

    const email = req.body.email
    const password = req.body.password

    const logInUsers = `select * from usersSignUp where emailId = ? AND password = ?`

    db.query(logInUsers,[email,password],(err,results)=>{
        if(err){
            console.log(err);
        }
        console.log(results)
        if(results.length > 0){
            console.log(results)
            req.session.user = results;
            console.log(req.session.user)
            res.send(results);
        }else if(email === "" || password === ""){
            res.json({message:"Please Fill the Details"});
        }else{
            console.log("Error")
            res.json({message:"Wrong Email Id or Password"});
        }
    })
})

app.get("/logInUsers",(req,res)=>{
    if(req.session.user){
        res.send({loggedIn:true,user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})

app.post("/writeBlogData",(req,res)=>{

    const title = req.body.title
    const topic = req.body.topic
    const content = req.body.content
    const showLogInStatus = req.body.showLogInStatus
  
    const writeBlogData = `insert into HomePageBlogs (title,topic,content,author) values ("${title}","${topic}","${content}","${showLogInStatus}")`;

    if(title === "" || content === ""){
        res.json({ErrorMsg:"Please fill Your Content"});
    }else if(topic === ""){
        res.json({ErrorMsg:"Please fill The Topic"});
    }else if(content.length < 300 || content.length < 2000){
        res.json({ErrorMsg:"The Length Should be between 300 and 2000 of your blog content"});
    }else if(title.length < 30 || title.length > 150){
        console.log("Please fill Your Content")
        res.json({ErrorMsg:"The Length Should be between 30 and 150 of your title"});
    }
    else{
        db.query(writeBlogData,(err)=>{
            if(err){
                console.log(err);
            }
            res.json("Data inserted")
        })
    }


})

app.get("/logout",(req,res)=>{
     res.clearCookie("BlogPageLogin")
     res.send("Cookie clear");     
    
})

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.listen(port,()=>{
    console.log(`${port} is running`)
})