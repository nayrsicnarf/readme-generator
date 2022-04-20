const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ projectName, projectDescription, projectLicense, projectRepo, username, projectInstallation, projectUse, projectContribute, projectTest, projectTechnologies, email }) =>

`# ${data.projectName}

## Table of Contents

1. [Description](#Description)
2. [GitHub Repo and Pages](#GitHub-Repo-and-Pages)
3. [License](#License)
4. [Technologies](#Technologies)
5. [Installation](#Installation)
6. [Usage](#Usage)
7. [Screenshots](#Screenshots)
8. [Questions](#Questions)

## Description

## License

## Technologies

## Installation

## Usage

## Screenshots

## Questions

`
inquirer
  .prompt([
    {
        type: "input",
        message: "Enter the name of your project.",
        name: "projectName"
    },
    {
        type: "input",
        message: "Enter a brief description of your project.",
        name: "projectDescription"
    },
    {
        type: "list",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache 2.0", "BSD 3-Clause", "BSD 2-Clause", "Eclipse Public", "GNU", "Mozilla", "ISC"],
        name: "projectLicense"
    },
    {
        type: "input",
        message: "Enther the name of the GitHub repository.",
        name: "projectRepo"
    },
    {
        type: "input",
        message: "Enter your GitHub username.",
        name: "username"
    },
    {
        type: "input",
        message: "Enter a short description on how a user should install your project.",
        name: "projectInstallation"
    },
    {
        type: "input",
        message: "Enter a short description on how a user should use your project.",
        name: "projectUse"
    },
    {
        type: "input",
        message: "Enter a short description on how a user should contribute to your project.",
        name: "projectContribute"
    },
    {
        type: "input",
        message: "Enter a short description on how a user should test your project.",
        name: "projectTest"
    },
    {
        type: "input",
        message: "Enter the technologies that used in this project",
        name: "projectTechnologies"
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email"
    },
  ])

.then((answers) => {
    const mdPageContent = generateReadMe(answers);

    fs.writeFile('README.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md')
    );
  });