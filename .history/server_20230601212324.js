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

server.post("/api/user_table", (req, res) => {
    let details = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      cemail: req.body.cemail,
    };
    let sql = "INSERT INTO user_table SET ?";
    db.query(sql, details, (error) => {
      if (error) {
        res.send({ status: false, message: "user created Failedd" + error.message });
      } else {
        res.send({ status: true, message: "user created successfully" });
      }
    });
  });

//view the Records

server.get("/api/user_table", (req, res) => {
    var sql = "SELECT * FROM user_table";
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });

//Search the Records
 
server.get("/api/user_table/:id", (req, res) => {
    var id = req.params.userid;
    var sql = "SELECT * FROM user_table WHERE userid=" + userid;
    db.query(sql, function (error, result) {
      if (error) {
        console.log("Error Connecting to DB");
      } else {
        res.send({ status: true, data: result });
      }
    });
  });


//Update the Records
 
server.put("/api/user_table/:id", (req, res) => {
    let sql =
      "UPDATE user_table SET fname='" +
      req.body.fname +
      "', lname='" +
      req.body.lname +
      "',email='" +
      req.body.email +
      "'  WHERE userid=" +
      req.params.id;

    let a = db.query(sql, (error, result) => {
      if (error) {
        res.send({ status: false, message: "User Updated Failed" + error.message });
      } else {
        res.send({ status: true, message: "User Updated successfully" });
      }
    });
  });


  //Delete the Records
 
  server.delete("/api/user_table/:id", (req, res) => {
    let sql = "DELETE FROM user_table WHERE userid=" + req.params.userid + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });


  
