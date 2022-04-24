const inquirer = require('inquirer');
const fs = require('fs');

const generateReadMe = ({ projectName, projectDescription, projectLicense, projectRepo, username, projectInstallation, projectUse, projectContribute, projectTest, projectTechnologies, email }) => {

    if (projectLicense === "Eclipse Public License 1.0") {
        badgeLicense = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (projectLicense === "BSD 2-Clause") {
        badgeLicense = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    } else if (projectLicense === "BSD 3-Clause") {
        badgeLicense = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (projectLicense === "MIT") {
        badgeLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (projectLicense === "GNU GPL v3") {
        badgeLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (projectLicense === "Mozilla") {
        badgeLicense = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (projectLicense === "ISC") {
        badgeLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (projectLicense === "Apache 2.0") {
        badgeLicense = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    }

    if (!projectName || !projectDescription || !projectLicense || !projectRepo || !username || !projectInstallation || !projectUse || !projectContribute || !projectTest || !projectTechnologies || !email) {
        console.error("Input(s) are invalid.");
        return;
    }

    return (`# ${projectName}
    
## Table of Contents

- [Description](#Description)
- [GitHub Repository and Deployment](#GitHub-Repository-and-Deployment)
- [License](#License)
- [Technologies](#Technologies)
- [Installation](#Installation)
- [Usage](#Usage)
- [Test](#Test)
- [Contribution](#Contributions)
- [Questions](#Questions)

## Description

${projectDescription}

## GitHub Repository and Deployment

${projectRepo}

## License

${projectLicense}

${badgeLicense}

## Technologies

${projectTechnologies}

## Installation

${projectInstallation}

## Usage

${projectUse}

## Test

${projectTest}

## Contribution

${projectContribute}

## Questions

Check out my GitHub page by searching for my username "${username}" in GitHub or by clicking on this [link](https://github.com/${username}/) to access my profile directly.

For any questions about this project or any other inquiries, please contact through [email](mailto:${email}) and I will get back to you at my earliest convenience.`);
}

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
            message: "What kind of license does your project have?",
            choices: ["Eclipse Public License 1.0", "BSD 2-Clause", "BSD 3-Clause", "MIT", "GNU GPL v3", "Mozilla", "ISC", "Apache 2.0",],
            name: "projectLicense"
        },
        {
            type: "input",
            message: "Enter the name of the GitHub repository.",
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
            message: "Enter the technologies that used in this project.",
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

        fs.writeFile('README-Generate.md', mdPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully generated README.md')
        );
    });