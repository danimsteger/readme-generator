# README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project involved creating a command-line application to dynamically generate a README file for a project based on user inputs. It involved using JavaScript, Node, npm, Inquirer, and Colors.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

To view the code of this project, you can clone this repository using the following commands in your command line:

### Clone this repository

```
git clone git@github.com:danimsteger/readme-generator.git
```

### Go into this repository

```
cd readme-generator
```

### Create npm package

```
npm init -y
```

### Install Inquirer v8.2.4 Module

```
npm install inquirer@8.2.4
```

### Install Colors Module

```
npm install colors
```

### Access code of the repository

```
code .
```

## Usage

To view the functionality of this program, you should copy the repository using the [Installation Instructions](#installation) to properly install the necessary modules.

To view the program, navigate to the cloned repository and run the following command:

```
node index
```

This will display the prompts, one question at a time, in the terminal. Users will input the answers to the prompts to add necessary information to their README file and select which license they used for their project.
![Sample view of terminal with completed prompts](/assets/images/terminal.png)

The user inputs will be write a new README and license file that will be found in the current directory.
![Sample view of the created files](/assets/images/files.png)

Once users select the license for their project, the corresponding badge will be populated on the README page and the license file will be generated. All of the user inputs will be populated in the README file.

![Sample view of a generated README in preview](/assets/images/generated-readme.png)

![Sample view of the generated License](/assets/images/license-file.png)

## Credits

This project was entirely created by Danielle Steger. To complete this project, I referenced several articles on "MDN Web Docs" and "W3Schools." Additionally, I referenced materials provided by edX Boot Camps LLC. This project was completed with the use of node and several npm modules including Inquirer8.2.4 and Colors and their corresponding documentation was referenced as well.

## License

Distributed under the MIT License. See [LICENSE](/LICENSE).
