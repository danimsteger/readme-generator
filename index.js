const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");

inquirer
  .prompt([
    {
      type: "name",
      message: colors.magenta("What is your name?"),
      name: "name",
    },
    {
      type: "name",
      message: colors.magenta("What is your email?"),
      name: "email",
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
    {
      type: "input",
      message: colors.magenta("What is your GitHub username?"),
      name: "github",
    },
  ])
  .then((data) => {
    const myMD = `# ${data.title}
    
## Description

${data.description}
You can view the page by clicking [here](${data.url}).

![Sample view of the page](/assets/images/page.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}
To access the live project, you can visit this [link](https://danimsteger.github.io/weather-dashboard/).

To view the code of this project, you can clone this repository using the following commands in your command line:

### Clone this repository


git clone git@github.com:danimsteger/weather-dashboard.git


### Go into this repository

cd weather-dashboard


### Access code of the repository


code

## Usage

${data.usage}

![Sample view of searching a city](/assets/images/search.png)


![Sample view of saved cities list](/assets/images/saved-cities.png)

The previously-searched cities are stored in an array local storage. You can view them if you right-click on the page and choose 'Inspect' from the drop-down menu. A new window will open on the right side of the screen and from their you can view the local storage. If on a Firefox browser, the pane will open at the bottom of your screen, instead of on the right side.

![Sample view of local storage](/assets/images/local-storage.png)

## Credits



This project was entirely created by Danielle Steger. To complete this project, I referenced several articles on "MDN Web Docs" and "W3Schools." Additionally, I referenced materials provided by edX Boot Camps LLC. This project was completed with the use of several outside libriaries including jQuery, Bootstrap, and dayjs and their corresponding documentation was referenced as well. Additionally, the OpenWeather API was used to get relevant weather data.

## License

Distributed under the MIT License. See [LICENSE](LICENSE).

## Questions

If you have any questions, please contact ${data.name} via [GitHub](${data.github}) or [email](${data.email}).

`;
    const filename = `${data.title.toLowerCase().split(" ").join("")}.md`;

    fs.writeFile(filename, myMD, (err) => console.log(err));
  });
