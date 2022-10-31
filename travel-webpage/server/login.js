
const jwt = require("jsonwebtoken")

function registerLoginRoutes(app, db) {
    
const verificationJwt = (req,res,next)=>{
    const token = req.headers["x-access-token"];

    if(!token){
        res.json("Yo we need a token")
    }else{
        jwt.verify(token,"jwtSecret",(err,decoded)=>{
            if(err){
                res.json({auth:false,msg:"U failed Authentication"})
            }else{
                req.userId = decoded.id;
                next();
            }
        })
    }
}

app.get("/userAuth",verificationJwt,(req,res)=>{
    res.send("Authenticated")
})


app.get("/logout",(req,res)=>{
    res.clearCookie("userId")
    res.send("Cookie sent to client")
})

    app.get("/login",(req,res)=>{
        if(req.session.user){
            res.json({loggedIn:true,user:req.session.user})
        }else{
            res.json({loggedIn:false})    
        }
    })
    
    app.post("/login",(req,res)=>{
        const emailID = req.body.emailID
        const password = req.body.password
     
        const loginQuery = `select id from register where emailId = ? and password = ?`
    
        if(emailID && password){

            
            db.query(loginQuery,[emailID,password],(err,results)=>{


                if(err){
                    console.log(err)
                }
                if(results.length > 0){
    
                    if(results){
                        id = results[0].id
                        const token = jwt.sign({id},"jwtSecret",{
                            expiresIn:300,
                        })
                        req.session.user = results;

                        res.json({auth:true,token:token,results:results})
                       }
    
    
                }else{
                    res.send({msg:"Invalid Email Id"})
                }   
            })
        }

            
    })
}

module.exports.registerLoginRoutes = registerLoginRoutes;

