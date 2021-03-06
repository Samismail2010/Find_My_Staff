const express = require('express');
const mysql = require('mysql2');
const db = require('./db/connection');
const inquirer = require('inquirer');

const promptUser = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log(`\n`);
    console.log(`============================`);
    console.log(`==                        ==`);
    console.log(`==    Employee Tracker    ==`);
    console.log(`==                        ==`);
    console.log(`============================`);        
    console.log(`\n`);

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
    promptUser();
});