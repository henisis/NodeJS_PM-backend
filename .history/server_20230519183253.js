const express = require('express')
const bodyParser = require('body-parser')
const mysql = require("mysql");
const server = express();
server.use(bodyParser.json());

// Establish the database connection


const db = mysql.createConnection({
 
    host: 'localhost:3306',
    user: 'root',
    password: '',

    database: 'test',

});


//Testing the database connection

db.connect(function (error) {
    if (error) {
      console.log(error.message);
    } else {
      console.log("successfully Connected to DB");
    }
  });

  


