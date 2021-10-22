// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Create an array of questions for user input
const info = [
    {
        name:'title',
        message:'What is the name of this project?',
        type: 'input',
    },
    {
        name:'userstory',
        message:'What is the Userstory of this project?',
        type: 'input',
    },
    {
        name:'overview',
        message:'Write a description for your Project.',
        type: 'input',
    },
    {
        name:'overview',
        message:'Write a description for your Project.',
        type: 'input',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();