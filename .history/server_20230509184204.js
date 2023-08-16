const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const server = express()

// Establish the database connection

const db = mysql.createConnection({

    host: "localhost",
    user:  "root",
    password: "",
    databse: "db_pmdatabase",
    
})