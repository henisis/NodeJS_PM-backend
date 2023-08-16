const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql');
const server = express()

// Establish the database connection


const db = mysql.createConnection({

    host: 'localhost',
    user:  'root',
    password: '',
    databse: 'test',

});

//Testing the database connection

db.connect(function (error){
    if (error) {
        console.log ("Error Connectingg to DB");
    }   else {
        console.log ("successfully Connected to DB");
    }
  }); 

