const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql');
const server = express()

// Establish the database connection


const db = mysql.createConnection({

    host: '127.0.0.1:5500',
    user:  'root',
    password: '',
    databse: 'db_pmdatabase',

});

//Testing the database connection

db.connect(function (error){
        if (error) {
            console.log ("Error Connectingg to DB");
        } else {
            console.log ("successfully Connected to DB");
        }
    }); 

