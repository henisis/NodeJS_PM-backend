const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql');
const server = express()

// Establish the database connection


const pool = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '',
    databse: 'test',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0   

});

//Testing the database connection

db.connect(function (error){
    if (error) {
        console.log ("Error Connecting to DB");
    }   else {
        console.log ("successfully Connected to DB");
    }
  }); 

