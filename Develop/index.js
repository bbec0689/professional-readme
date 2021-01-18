// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?",
        default: 'Dave',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter your Name!')
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
        default: 'bbec0689',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('You need to enter your Name!')
            }
        }
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the name of your Github repo?',
        default: 'professional-readme',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('You need to enter your Github repo name!')
            }
        }
    },
    {
        type: 'input',
        name: 'project',
        message: 'input your projects name:',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('You need to enter your project name!')
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of the project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a description of the project!')
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license was used for this project?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
    },
    {
        type: 'input',
        name: 'installation',
        message: "If any, what are the steps to install your project?",
        
    },
    {
        type: 'input',
        name: 'tests',
        message: "If any, what tests were written for this application and provide some examples of how to run them.?"
    },
    {
        type: 'confirm',
        name: 'contribution',
        message: "Would you like other people to contribute to this project?",
        default: true
    },
    {
        type: 'input',
        name: 'command',
        message: "Would is the console command to run this project?",
        default: true
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide examples on how you would use this project?",
        default: true
    },
    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions).then((response))
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt;
}

// Function call to initialize app
init();
