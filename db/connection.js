const mysql = require('mysql2')


const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'amber9',
        database: 'department_db'
    });
    console.log ("Connected to staff database")

module.exports = db;