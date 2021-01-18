// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    # Project Title
README

## Description
A README.md that was created by Node.js

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

Created with npm install inquirer

## License

MIT License

## Usage

Can be used to create a README for any project

## Contributions

Dave Becks

## Tests

index.js

## Questions

If there are any questions about this project please reach out at bbec0689@gmail.com or you can view my github account here: [bbec0689](https://github.com/bbec0689)

`;
}

module.exports = generateMarkdown;
console.log(generateMarkdown)
