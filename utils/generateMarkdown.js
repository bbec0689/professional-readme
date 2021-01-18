
function generateMarkdown(data) {
    return `# ${data.title}

## This README.md was created using the described application below 

## Description
${data.description}

## Table of Contents

* [Installation](#installation)
* [Command](#command)
* [Usage](#usage)
* [Tests](#tests)
* [Contributions](#contributions)
* [Author](#questions)
* [License](#license)
* [Photo](#photo)

## Photo

${data.photo}

## Installation

${data.installation}

## Command

${data.command}

## Usage

${data.usage}

## Tests

${data.tests}

## Contributions

${data.contributions}, contributions are/aren't welcome.

## Author
![user photo](https://avatars.githubusercontent.com/${data.github}?size=100)
-Github: [${data.github}](https://github.com/${data.github}) 

If there are any questions about this project please reach out at ${data.questions} or you can view my github account here: ${data.questions2}

## License 

[![GitHub license](https://img.shields.io/badge/license-${data.license}-red.svg)](https://shields.io/)
`;
}

module.exports = generateMarkdown;
