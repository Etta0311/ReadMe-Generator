// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

//Create an array of questions for user input
const info = [
    {
        name:"title",
        message:"What's the name of this project?",
        type: "input"
    },
    {
        name:'overview',
        message:'Please give a Description of the project.',
        type: 'input'
    },
    {
        name: 'installation',
        message: "Please give Installation Instructions of the project",
        type: 'input'
    },
    { 
        name: 'usage',
        message: "What's the usage of the project?",
        type: 'input'
    },
    {
        name: 'test',
        message: "What's the Testing Instruction for the project?",
        type: 'input'
    },
    {
        type: 'input',
        name: 'reponame',
        message: "What's your Project Repository name?",
    },
    {
        name: 'repo',
        message: "What's this Project Github repo?",
        type: 'input'
    },
    {
        name: 'name',
        message: "What's the name you'd like to be recognised?",
        type: 'input'
    },
    {
        name: 'Github',
        message: "What's your Github username?",
        type: 'input'
    },
    {
        name: 'LinkedIn',
        message: "What's your LinkedIn username?",
        type: 'input'
    },
    {
       name: 'email',
       message: "What's your email?",
       type: 'input'
    },
    {
        name: 'license',
        message: 'Give your license details?',
        type: 'list',
        choices: ["MIT", 'Apache license 2.0', 'Artistic license 2.0','GNU General Public License v2.0'],
        filter(val) {
          return val.toLowerCase();
        },
        default: "MIT"
      }
];

// TODO: Create a function to write README file
function writeToFile("fileName", data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();