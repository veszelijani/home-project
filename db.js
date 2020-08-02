'use strict';

const mysql = require('mysql');
require('dotenv').config()

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
});

conn.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Succesfully connect to the Database');
})
module.exports = conn;