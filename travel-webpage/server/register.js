
function registerSignUpRoutes(app,db){
    
app.get("/createDatabase",(req,res)=>{
    const sql = `create database travelWebsite`
                        
    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("database created")
})

app.get("/createTable",(req,res)=>{
    const sql = `create table register(id int not null auto_increment,name varchar(100),age int,emailID varchar(100),phoneNo bigint,password varchar(100),primary key(id),CONSTRAINT register_ibfk_1 foreign key (id) references info(pid))`

    db.query(sql,(err)=>{
        if(err){
            console.log(err);
        }
    })
    res.send("Table is created")
})

    app.post("/insert",(req,res)=>{
        const name = req.body.name
        const age = req.body.age
        const emailID = req.body.emailID
        const phoneNo = req.body.phoneNo
        const password = req.body.password
        const confirmPassword = req.body.confirmPassword

        if(name === "" || age === "" || emailID === ""){
            res.send({message:"Name and Age and EmailId not filled"});
        }
        else if(password.length === "" || confirmPassword === ""){
            res.send({message:"Please fill the Password"});
        }else if(emailID === ""){
            res.send({message:"Email Id not filled"});
        }else if(password.length !== confirmPassword.length){
            res.send({message:"Password not Matched"});
        }else if(phoneNo === ""){
            res.send({message:"Phone No not Filled"});
        }else{
                db.query(insertQuery,(err,results)=>{
                    if(err){
                        console.log(err);
                    }else{
                        // res.send({message:name+" Signed up"});
                        res.send(" Signed up");
                        console.log(results)                
                    }
                })
        }
    
    })
    
}



module.exports.registerSignUpRoutes = registerSignUpRoutes;