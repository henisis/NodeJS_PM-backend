const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Establish the database connection


const db = mysql.createConnection({
 
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_test',

});


//Testing the database connection

db.connect(function (error) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("successfully Connected to DB");
    }
  });

//Establish the Port
 
server.listen(8085,function check(error) {
  if (error)
  {
  console.log("Error....dddd!!!!");
  }
 
  else
  {
        console.log("Started....!!!! 8085");
 
    }
});


//Create the Records
 
server.post("/api/user_table/add", (req, res) => {
    let details = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      cemail: req.body.c email,
    };
    let sql = "INSERT INTO use SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "user created Failed" });
      } else {
        res.send({ status: true, message: "user created successfully" });
      }
    });
  });




  
