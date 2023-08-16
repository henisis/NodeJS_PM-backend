const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Establish the database connection


const db = mysql.createConnection({
 
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',


});



//Testing the database connection



  db.connect(function (err) {
    if (err) {
      console.log("Error connecting to database:", err.message);
    } else {
      console.log("Successfully connected to database");
    }
  });



