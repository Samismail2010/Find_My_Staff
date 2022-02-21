const inquirer = require('inquirer');
const express = require('express');
const db = require('../../db/connection');
const consoleTable = require('console.table');
const mysql = require('mysql2');

//const viewDept
//const viewRole
//const viewEmployee


const promptUser = () => {
    inquirer.prompt ([
    {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: [ 
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Close App'
        ]
    }
])

.then((answers) => {
    const {choices} = answers;

    if (choices === 'View All Departments') {
        viewDept();

    }

    if (choices === 'View All Roles') {
        viewRole();
    }

    if (choices === 'View All Employees') {
        viewEmployee();
    }

    if (choices === 'Close App'){
        console.log('Connection Ended')
        db.end();
    }

    })
}

    
module.exports = promptUser();