const express = require('express');
const db = require('../../db/connection')
const mysql = require('mysql2');
const inquirer = require('inquirer');

const viewRoles = () => {
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

module.exports = { viewRoles };