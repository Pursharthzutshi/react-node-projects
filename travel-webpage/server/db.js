const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    password:"",
    user:"root",
    port:3307,
    database:"travelWebsite",
})
  


module.exports.db = db
