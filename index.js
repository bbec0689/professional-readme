// Loading Packages
const inquirer = require('inquirer');
const fs = require('fs');

// Linking generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown.js');


// Creating Questions start
const questions = [
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
        name: 'title',
        message: 'input your projects name:',
        validate: titleInput => {
            if (titleInput) {
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
        choices: ['GNU-AGPLv3', 'GNU-GPLv3', 'GNU-LGPLv3', 'Mozilla-Public-License-2.0','ISC-License', 'Apache-License 2.0', 'MIT-License', 'Boost-Software-License-1.0'],
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the steps to install your project?",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('You need to enter installation steps for the project!')
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: "If any, what tests were written for this application and provide some examples of how to run them.?",
        default: 'none'
    },
    {
        type: 'confirm',
        name: 'contributions',
        message: "Would you like other people to contribute to this project?",
        default: true
    },
    {
        type: 'input',
        name: 'command',
        message: "What is the console command to run this project?",
        default: 'node index.js',
        validate: commandInput => {
            if (commandInput) {
                return true;
            } else {
                console.log('You need to enter the command to run this application!')
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide examples on how you would use this project?",
        default: 'Create a professional README.md',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to give examples of how to use this project!')
            }
        }
    },
    {
    type: 'input',
    name: 'questions',
    message: "What is your email?",
    default: 'bbec0689@gmail.com'
    },
    {
    type: 'input',
    name: 'questions2',
    message: "What is your github link?",
    default: '[bbec0689](https://github.com/bbec0689)'
    },
    {
        type: 'input',
        name: 'photo',
        message: "Paste a photo of your project:",
    },
    
];
//Questions End

function writeToFile(fileName, data) {
    // write file function with error catch
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Done. README.md created")
    })  
}

function init(){
    inquirer.prompt(questions).then((data) => {
        // create text for file by passing data into the generateMarkdown function exported from generateMarkdown.js
        const text = generateMarkdown(data);        
        // call writeToFile for a README with the text
        writeToFile("README.md", text);
    })
}

init();
