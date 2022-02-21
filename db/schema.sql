/*Starts MySQL, basically letting it know to drop the department if it was already
there. Also, create DATABASE and enter the database*/
DROP DATABASE IF EXISTS staff;
CREATE DATABASE staff;
USE staff;

CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
/* creating role table, will give job title and salary along with the department
employee belongs to*/
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(9,2)
    department_id INTEGER,
    CONTRAINT fk_department FOREIGN KEY (department_id) REFRENCES department(id) ON DELETE CASCADE
);
/* creating table section, first name/last name role of employee and who
are their assigned manager. manager will be set to NULL*/
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL
);