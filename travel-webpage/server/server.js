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

app.get("/createTableAirlineCompany",(req,res)=>{
    const sql = `create table Airline_Company(id int not null auto_increment,Airline_company varchar(255) NOT NULL,from_list varchar(255) NOT NULL,to_list varchar(255) NOT NULL,primary key(id))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Airline company Table created")
})

app.post("/fetchflightsData",(req,res)=>{

    const fromLocationInput = req.body.fromLocationInput
    const toLocationInput = req.body.toLocationInput
    
    const sql = `SELECT * FROM travelwebsite.flight_number fn 
    inner join travelwebsite.flight_schedule fs on fn.flight_number = fs.flight_number
    where fn.from_list = ? AND fn.to_list = ?`

    
    db.query(sql,[fromLocationInput,toLocationInput],(err,results)=>{
        if(err){
            console.log(err);
        }
        if(results.length > 0){            
      
        res.json(results)
        console.log(results);
    }else{
        res.json({message:"No Flight Avail"})
    }
    })

})

// app.get("/fetchflightsData",(req,res)=>{

//     const fromLocationInput = req.body.fromLocationInput
//     const toLocationInput = req.body.toLocationInput
    
//     const sql = `SELECT * FROM travelwebsite.flight_number fn 
//     inner join travelwebsite.flight_schedule fs on fn.flight_number = fs.flight_number
//     where fn.from_list = ? AND fn.to_list = ?`

    
//     db.query(sql,[fromLocationInput,toLocationInput],(err,results)=>{
//         if(err){
//             console.log(err);
//         }
//         if(results.length > 0){            
      
//         res.json(results)
//         console.log(results);
//     }else{
//         res.json({message:"No Flight Avail"})
//     }
//     })

// })



app.get("/fetchflightsData",(req,res)=>{

    const fromLocationInput = req.body.fromLocationInput
    const toLocationInput = req.body.toLocationInput
    
    const sql = `SELECT * FROM travelwebsite.flight_number fn 
    inner join travelwebsite.flight_schedule fs on fn.flight_number = fs.flight_number
    where fn.from_list = ? AND fn.to_list = ?`

    
    db.query(sql,[fromLocationInput,toLocationInput],(err,results)=>{
        if(err){
            console.log(err);
        }
        if(results.length > 0){            
      
        res.json(results)
        console.log(results);
    }else{
        res.json({message:"No Flight Avail"})
    }
    })

})




// app.get("/alterTableAirlines",(req,res)=>{
//     const sql = `ALTER TABLE dbo.Folders ADD CONSTRAINT UQ_Folders_UserId_Id UNIQUE(UserId, Id)`

//     db.query(sql,(err)=>{
//         if(err){
//             console.log(err);
//         }
//     })

//     res.send("Flights Table created")

// })


app.get("/createTableAirlines",(req,res)=>{
    // const sql = `create table Airlines(name varchar(255) NOT NULL,flight_list varchar(255) NOT NULL,primary key(name))`
    const sql = `create table Airlines(name varchar(255) NOT NULL,from_list varchar(255),to_list varchar(255) ,timings INT NOT NULL,price INT NOT NULL,primary key(name,timings,price))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })

    res.send("Airline Table created")
})


app.get("/alterTableAirlines",(req,res)=>{
    const sql = `ALTER TABLE airlines DROP from_list ` 

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Alter Table")
})

app.get("/createFlightListTable",(req,res)=>{
    const sql = `create table Flights (flight1 varchar(50),flight2 varchar(50),flight3 varchar(50),flight4 varchar(50),flight5 varchar(50),from_list varchar(50),to_list varchar(50),primary key(flight1,flight2,flight3,flight4,flight5))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Flight List Table is created");
})

app.get("/createFlightNumberTable",(req,res)=>{
    const sql = `create table flight_number (Flight_Name varchar(100),from_list varchar(100),to_list varchar(100),Flight_Number varchar(100),primary key (Flight_Name,Flight_Number),CONSTRAINT flights_name_number_fk FOREIGN KEY (flight_name) REFERENCES Flights (flight1))`
    
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Flight Number Table is created");
})

app.get("/alterFlightNumberTable",(req,res)=>{
    const sql = `alter table flight_number ADD FOREIGN KEY (Flight_Number) REFERENCES flight_schedule(Flight_Number)`
    
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Flight Number Table is Altered");
})


app.get("/alterFlightsTable",(req,res)=>{
    const sql = `alter table flights ADD FOREIGN KEY (flight1,flight2,flight3,flight4,flight5) REFERENCES flight_number(Flight_Name,from_list,to_list)`
    
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Flight Number Table is Altered");
})

app.get("/createFlightTimingsPrice",(req,res)=>{
    const sql = `create table flight_schedule (Flight_Number varchar(100),timings varchar(100),price varchar(100),primary key(Flight_Number))`
    db.query(sql,(err)=>{                                                   
        if(err){
            console.log(err);
        }
    })
    res.send("Flight schedule Table is created");
})

// app.get("/alterTableAirlines",(req,res)=>{
//     const sql = `ALTER TABLE Airlines
//     ADD CONSTRAINT Ak_name_timings_price UNIQUE (name,timings,price)`

//     db.query(sql,(err)=>{
//         if(err){
//             console.log(err);
//         }
//     })
//     res.send("Airline Table Altered")
// })


app.get("/alterTable",(req,res)=>{
    const sql = `alter table register add foreign key (id) refrences info (pid)`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Table is Altered")

})

app.get("/createDB",(req,res)=>{
    const sql = `create db travel`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("create db")

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
