const express = require('express');
const db = require('../../db/connection');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const viewDepts = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err,rows) => {
        if (err) throw err;
        console.log('\n');
        console.log('Displaying all department');
        console.log(rows);
    });
};

module.exports = { viewDepts };