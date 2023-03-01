const inquirer = require('inquirer');
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Gt23!JR21!#*_',
  database: 'employees_db'
});

connection.connect(err => {
    if (err) {
      console.error('Error connecting to database: ' + err.stack);
      return;
    }
    console.log('Connected to database as id ' + connection.threadId);
  });

  // Prompt the user for input using inquirer
inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['Add an employee', 'View all employees', 'Update an employee', 'Delete an employee', 'view by department', 'view management', 'update management', 'view by role']
    }
  ]).then(answer => {
    switch (answer.action) {
      case 'Add an employee':
        // Perform create operation
        break;
      case 'View all employees':
        // Perform read operation
        break;
      case 'Update an employee':
        // Perform update operation
        break;
      case 'Delete an employee':
        // Perform delete operation
        break;
      default:
        console.error('Invalid action: ' + answer.action);
    }
  });