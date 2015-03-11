/*
  .....  YOUR MISSION  .....

  You are an HR manager and need a way to keep
  track of employees, which department they work
  in, and other staistical information. You need
  to build a simple JavaScript program that...

  1. Defines a Company, a Department, a Manager,
      and an Employee.

  2. When a Company object is created, you must
      be able to specify the name of the company

  3. When a Department object is created, you must
      be able to specify the name of the department.

  4. When a Manager object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name

  5. When an Employee object is created, you must
      be able to specify the following traits
        a. First name
        b. Last name
        c. Age
        d. Marital status
        e. Salary
      Also, modify the Employee prototype to add the
      following methods (one example given):
        a. setDepartment - Override the default department
        b. getHourlyWage - This should return the hourly
                           rate for the annual salary
        c. setManager - Assign a Manager to an employee


  5. Employee must inherit Department properties
  6. Manager must inherit Department properties
  7. Department must inherit Company properties

*/

// Define the Company function
function Company (name) {
  this.company = name;
}

// Define the Department function
function Department (name) {
  this.department = name;
}

// Define the Manager function


// Define the Employee function.
function Employee () {
  // this.firstName = first;
}
Employee.prototype = new Department("Software");

// You can add methods to an object's prototype (see usage below)
Employee.prototype.setDepartment = function (department) {

  // The department property gets inherited from the Department
  // object, but can be overriden at any time by each Employee
  this.department = department;
}

var Steve = new Employee("Steve", "Brownlee", "Age", "Married", "1000000");

// Change the department for an employee to override the default
Steve.setDepartment("Accounting");


// Show the employee's properties
console.log(Steve);
