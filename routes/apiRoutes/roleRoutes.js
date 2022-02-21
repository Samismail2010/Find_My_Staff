const express = require('express');
const db = require('../../db/connection')
const mysql = require('mysql2');
const inquirer = require('inquirer');

const viewRole = () => {
    const sql =    `SELECT role.id, role.title, department.name AS department
                    FROM role
                    INNER JOIN department ON role.department_id = department.id`;
    db.query(sql, (err,rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Displaying all roles')
        console.log(rows);
    })
}

const addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'addRole',
            message: 'What new role would you like to add?',
            validate: addRole => {
                if(addRole){
                    return true;
                } else {
                    console.log('Please select a role');
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO role (role.title, role.salary, role.department_id) VALUES (?,?,?)`;
        db.query(sql, answer.addRole, (err,result) =>{
            if (err) throw err;
            console.log('Added' + answer.addRole + 'to Role');
            viewRole();
        })

    })
}
module.exports = {
    viewRole,
    addRole
}