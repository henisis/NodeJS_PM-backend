const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Establish the database connection


const db = mysql.createConnection({
 
    host: "127.0.0.1:4400",
    user: "root",
    password: "",
    database: "test",


});

//Testing the database connection

db.connect(function (error) {
    if (error) {
      console.log("Error Connecting to DB");
    } else {
      console.log("successfully Connected to DB");
    }
  });

//Establish the Port
 
server.listen(4400,function check(error) {
    if (error)
    {
    console.log("Error....dddd!!!!");
    }
 
    else
    {
        console.log("Started....!!!! 4400");
 
    }
});