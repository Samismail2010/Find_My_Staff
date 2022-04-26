INSERT INTO department (name)
VALUES
    ('Entry'),
    ('Individual Contributor'),
    ('Manager'),
    ('Legal Director');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Intern', 20000, 1),
    ('Legal Clerk', 40000, 1),
    ('Legal Assistant', 65000, 2),
    ('Legal Analyst', 88000, 2),
    ('Manager Legal Ops', 150000, 3),
    ('Director of Legal Affairs', 180000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('James', 'Fraser', 2, 5),
    ('Jack', 'London', 4, 5),
    ('Robert', 'Bruce', 1, 5),
    ('Peter', 'Greenaway', 3, 5),
    ('Derek', 'Jarman', 1, 5),
    ('Paolo', 'Pasolini', 5, 6),
    ('Heathcote', 'Williams', 4, 5),
    ('Sandy', 'Powell', 3, 5),
    ('Emil', 'Zola', 6, null);