// node modules
const inquirer = require('inquirer')
const fs = require('fs')
const genMD = require()

inquirer
.prompt([
  {
    type: 'input',
    name: 'username',
    message: 'Enter your Github username: '
  },
  {
    type: 'input',
    name: 'email',
    messager: 'Enter your email address: '
  },
  {
    type: 'input',
    name: 'title',
    message: "What's your project's title?: "
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Enter a description for your project: '
  },
  {
    type: 'input',
    name: 'installation',
    message: "Enter your project's installation instructions: "
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage info: '
  },
  {
    type: 'input',
    name: 'contribution',
    message: "Enter your project's contribution guidelines: "
  },
  {
    type: 'input',
    name: 'tests',
    message: "Enter your project's test instructions: "
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Licensing options',
    choices: [
      "None",
      "Apache2.0",
      "GNU Public v3.0",
      "MIT",
      "Boost Software 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public 2.0",
      "GNU Affero General Public v3.0",
      "GNU General Public v2.0",
      "GNU Lesser General Public v2.1",
      "Mozilla Public 2.0",
      "the Unilicense"
    ]
  }

])