const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");
const { mitContent } = require("./licenses");
const { mozillaContent } = require("./licenses");
const { gnuContent } = require("./licenses");

inquirer
  .prompt([
    //Creates input prompts in terminal to gather user information and README information
    {
      type: "input",
      message: colors.magenta("What is your name?"),
      name: "name",
    },
    {
      type: "input",
      message: colors.magenta("What is your email?"),
      name: "email",
    },
    {
      type: "input",
      message: colors.magenta("What is your GitHub username?"),
      name: "github",
    },
    {
      type: "input",
      message: colors.magenta("Please input the title of your project"),
      name: "title",
    },
    {
      type: "input",
      message: colors.magenta("Please write a description for your project"),
      name: "description",
    },
    {
      type: "input",
      message: colors.magenta("Please type the full URL for your project"),
      name: "url",
    },
    {
      type: "input",
      message: colors.magenta(
        "Please list the installation instructions for your project."
      ),
      name: "installation",
    },
    {
      type: "input",
      message: colors.magenta(
        "Please describe the usage information for the project."
      ),
      name: "usage",
    },
    {
      type: "input",
      message: colors.magenta(
        "Please describe the contribution guidelines for the project."
      ),
      name: "contribution",
    },
    {
      type: "input",
      message: colors.magenta("Please list the test instructions."),
      name: "test",
    },
    // Creates list prompt to select type of License
    {
      type: "list",
      message: colors.magenta("Please select the license for your project."),
      name: "license",
      choices: [
        "MIT License",
        "Mozilla Public License 2.0",
        "GNU General Public License v2.0",
      ],
    },
  ])
  .then((data) => {
    let licenseBadge;
    let licenseContent;
    // Creates different license badges and license content depending on the selected choice.
    if (data.license === "MIT License") {
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseContent = mitContent(data);
    } else if (data.license === "Mozilla Public License 2.0") {
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licenseContent = mozillaContent;
    } else {
      licenseBadge =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      licenseContent = gnuContent(data);
    }

    // Creates name of license file
    const licensename = `${data.title
      .toLowerCase()
      .split(" ")
      .join("")}_license.md`;

    // Creates README.md content
    const myMD = `# ${data.title}


${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  You can view the page by clicking [here](${data.url}).
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  
  To access the live project, you can visit this [link](${data.url}).

 ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  Distributed under the ${data.license}. See [LICENSE](${licensename}).
  
  ## Contribution
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}
  
  
  ## Questions
  
 If you have any questions, please contact ${data.name} via [GitHub](https://github.com/${data.github}) or [email](mailto:${data.email}).`;

    // Creates file name for README based on the inputed project title.
    const filename = `${data.title.toLowerCase().split(" ").join("")}.md`;

    // Writes README file with created filename, the myMD md content and creates console.log messges for errors or successfully creating the file.
    fs.writeFile(filename, myMD, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("README file created successfully!");
      }
    });

    // Writes license file with created licensename, the license content md (dependent on the license selection) and creates console.log messges for errors or successfully creating the file.
    fs.writeFile(licensename, licenseContent, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("License file created successfully!");
      }
    });
  });
