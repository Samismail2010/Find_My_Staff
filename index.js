const inquirer = require('inquirer');
require('console.table');
const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection (
    {
        host: 'localhost',
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW
    },
    console.log('Connected successfully.')
)



function promptQues() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            choices: [{
                name: 'View All Departments',
                value: 'viewDepts'

            },
            {
                name: 'View All Roles',
                value: 'viewRoles'
            },
            {
                name: 'View All employees',
                value: 'viewEmployees'
            },
            {
                name: 'Add a department',
                value: 'Add a department',
            },
            {
                name: 'Add a role',
                value: 'Add a role',
            },
            {
                name: 'Add a employee',
                value: 'Add a employee',
            },
            {
                name: 'Update an employee role',
                value: 'Update an employee role',
            },
            {
                name: 'Update an employee manager',
                value: 'Update an employee manager',
            },
            {
                name: 'View employees by department',
                value: 'View employees by department',
            },
            {
                name: 'Delete a department',
                value: 'Delete a department',
            },
            {
                name: 'Delete a role',
                value: 'Delete a role',
            },
            {
                name: 'Delete an employee',
                value: 'Delete an employee',
            },
            {
                name: 'View all deparment budgets',
                value: 'View all deparment budgets',
            },
            {
                name: 'Quit',
                value: 'Quit',
            },
        ],
    },
])

}
init();