const mysql = require("mysql");

// const db = mysql.createConnection({
//     host:"localhost",
//     password:"",
//     user:"root",
//     port:3307,
//     database:"travelWebsite",
// })
  

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Password",
    database:"travelwebsite"
    
    
})
  


module.exports.db = db
