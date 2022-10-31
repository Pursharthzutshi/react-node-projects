const express = require("express")
const app = express();
const port = 3002
const bodyParser = require("body-parser");
const cors = require("cors")
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { registerLoginRoutes } = require("./Login");
const { registerSignUpRoutes } = require("./register");
const { db } = require("./db");
const {logInResults} = require("./login")

app.use(cookieParser());

app.use(session({
    key:"userId",
    secret:"registerSecret",
    resave:true,
    saveUninitialized:false,
    cookie:{
        expires:60*30*30,
    }
}))


app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials:true
}))

db.connect((err)=>{
    if(err){
        console.log(err);
    }
})

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get("/home",(req,res)=>{
    res.send("Home");
})


app.get("/fetch/:id",(req,res)=>{

    const sql = `select * from register inner join info on register.id = info.pid where id = ?`
    const id = req.params.id

    db.query(sql,[id],(err,results)=>{
        if(err){
            console.log(err);
        }
        res.send(results);        

    })
})


app.get("/deleteTableTwo",(req,res)=>{
    const sql = `drop table info`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Second Table is Deleted")

})

app.get("/alterTable",(req,res)=>{
    const sql = `alter table register add foreign key (id) refrences info (pid)`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Table is Altered")

})

app.get("/deleteTable",(req,res)=>{
    const sql = `drop table register`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Table is Deleted")
})




app.get("/fk",(req,res)=>{
    const sql = `SET FOREIGN_KEY_CHECKS=0`

    db.query(sql,(err)=>{
        
        if(err){
            console.log(err)
        }
        res.send("fk")
    })
})


registerLoginRoutes(app, db);
registerSignUpRoutes(app, db);


app.listen(port,()=>{
    console.log(`${port} is running`);
})
