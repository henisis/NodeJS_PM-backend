const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql');
const server = express()

// Establish the database connection


var connection = mysql.createConnection({

    host: "localhost",
    user:  "root",
    password: "",
    databse: "db_pmdatabase",

});

//Testing the database connection

db.connect(function (error){
        if (error) {
            console.log ("Error Connecting to DB");
        } else {
            console.log ("successfully Connected to DB");
        }
    }); 

connection.end();