const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql12');
const server = express()

const mysql = require('mysql2');

// create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// test the connection
pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log(`Connected as ID ${connection.threadId}`);
  connection.release();
});

