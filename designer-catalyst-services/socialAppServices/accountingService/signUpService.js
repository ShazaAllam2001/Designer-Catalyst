const express = require('express');
const mysql = require("mysql2");
const dotenv = require('dotenv');

dotenv.config();

/*const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});*/
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "<NiceGuy>192",
    database: "designer_catalyst_accounts"
});

db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
});

