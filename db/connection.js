const mysql = require('mysql2')

const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: "",
        database: 'department',
    },
    console.log ("Connected to department database")
);

module.exports = db;