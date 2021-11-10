// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter project title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter description of your project",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions of your project",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter usage information of your project",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter tests instructions for your project",
        name: "tests"
    },
    {
        type: "input",
        message: "Contributors towards the project",
        name: "contributing"
    },
    {
        type: "list",
        message: "Choose a license type",
        choices: ["ISC", "Apache", "MIT"],
        name: "license"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    const content = generateMarkdown(data)
    fs.writeFile(fileName, content, function(err) {
        if(err) console.log(err)
        console.log("Readme generated")
    })
}

// TODO: Create a function to initialize app
function init() {
    // const promptAnswers = inquirer.prompt(questions)
    // console.log(promptAnswers)
    inquirer.prompt(questions)
        .then(function (answer) {
            console.log(answer)
            writeToFile("README.md", answer)
        }).catch(err => {
            console.log(err)
        })

}

// Function call to initialize app
init();
