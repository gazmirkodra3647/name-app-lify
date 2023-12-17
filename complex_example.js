// filename: complex_example.js

/*
This code demonstrates a complex and sophisticated JavaScript application.
It performs various operations related to employee management, payroll calculations,
and statistical analysis. The code is split into different modules for better
organization and maintainability. Please note that this is a fictitious example
and does not represent a real-world application.

Author: John Doe
Date: August 1, 2022
*/

// Employee module
const Employees = (function () {
  const employees = [];

  function addEmployee(name, salary) {
    employees.push({ name, salary });
  }

  function removeEmployee(name) {
    const index = employees.findIndex((employee) => employee.name === name);
    if (index !== -1) {
      employees.splice(index, 1);
    }
  }

  function getAverageSalary() {
    const totalSalary = employees.reduce((total, employee) => total + employee.salary, 0);
    return totalSalary / employees.length;
  }

  return {
    addEmployee,
    removeEmployee,
    getAverageSalary,
  };
})();

// Payroll module
const Payroll = (function () {
  function calculatePayroll() {
    // Perform complex payroll calculations here...
    return "Payroll calculated successfully.";
  }

  return {
    calculatePayroll,
  };
})();

// Statistical Analysis module
const Statistics = (function () {
  function calculateMean(numbers) {
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
  }

  function calculateStandardDeviation(numbers) {
    const mean = calculateMean(numbers);
    const squaredDifferences = numbers.map((num) => (num - mean) ** 2);
    const meanOfSquaredDifferences = calculateMean(squaredDifferences);
    return Math.sqrt(meanOfSquaredDifferences);
  }

  return {
    calculateMean,
    calculateStandardDeviation,
  };
})();

// Main program
(function () {
  // Add employees
  Employees.addEmployee("John Smith", 5000);
  Employees.addEmployee("Jane Doe", 6000);
  Employees.addEmployee("Mike Johnson", 4000);

  // Calculate and display average salary
  const averageSalary = Employees.getAverageSalary();
  console.log("Average Salary:", averageSalary);

  // Calculate payroll
  const payrollResult = Payroll.calculatePayroll();
  console.log("Payroll Result:", payrollResult);

  // Perform statistical analysis
  const data = [10, 20, 30, 40, 50];
  const mean = Statistics.calculateMean(data);
  const standardDeviation = Statistics.calculateStandardDeviation(data);
  console.log("Mean:", mean);
  console.log("Standard Deviation:", standardDeviation);
})();
