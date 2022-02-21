const express = require('express');
const mysql = require('mysql2');
const db = require('../../db/connection')
const inquirer = require('inquirer');

const viewDept = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err,rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Displaying all department');
        console.log(rows);
    });
};
const addDept = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'addDept',
            message: 'What department would you like to add?',
            validate: addDept => {
                if (addDept) {
                    return true;    
                } else {
                    console.log('Please provide the name of the new department')
                    return false;
                }
            }
        }
    ])
    .then(answer => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        db.query(sql, answer.addDept, (err, result) => {
            if (err) throw err;
            console.log('Added' + answer.addDept + 'to departments');
            viewDept();
        })
    })
}

module.exports = {
    viewDept,
    addDept
};