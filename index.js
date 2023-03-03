const inquirer = require('inquirer');
const mysql = require('mysql2');

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

  function mainMenu() {
    inquirer.prompt([
      { type: 'list', name: 'action', message: 'What would you like to do?', choices: ['Add an employee', 'View all employees', 'Update an employee', 'Delete an employee', 'View by department', 'View management', 'View by role', 'end program']}
    ]).then(answer => {
      switch (answer.action) {
        case 'Add an employee':
          addEmployee();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Update an employee':
          updateEmployee();
          break;
        case 'Delete an employee':
          deleteEmployee();
          break;
        case 'View by department':
          viewByDepartment();
          break;
        case 'View management':
          viewManagement();
          break;
        case 'View by role':
          viewByRole();
          break;
        case 'end program':
            endProgram();
        break;
        default:
          console.error('Invalid action: ' + answer.action);
          mainMenu();
      }
    });
  }

  function addEmployee() {
    //inquirer prompt to add employee, mysql code to add employee to database, then loops back to main menu
    inquirer.prompt([]).then();
    mainMenu();
  }

  function viewAllEmployees() {
    //mysql code to show all employees on the DB then loops back to main menu
  }

  function updateEmployee () {
    // code to update employees to be implimented
    inquirer.prompt([]).then();
    mainMenu();
  }
  function deleteEmployee() {
    //inquirer prompt to ask which employee do you want to delete with an are you sure prompt after asking which employee to delete
    inquirer.prompt([]).then();
    mainMenu();
  }
  function viewByDepartment() {
    //asks which department they would like to view and then mysql code to view all employees in said department
    inquirer.prompt([]).then();
    mainMenu();
  }
  function viewManagement() {
    //views all employees where the isManager boolean = true
  }
  function viewByRole() {
    //asks what job title they would like to view and shows all employees with that job title
    inquirer.prompt([]).then();
    mainMenu();
  }
  function endProgram() {
    //exits program
  }

  mainMenu()