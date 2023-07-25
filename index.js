// Include packages needed for this application (Inquirer.js, Node.Js and Jest.js)
// Install node modules and also need to install inquirer to be able to run the program. Run the command “npm install inquirer@8.2.4”

const inquirer = require("inquirer");
const fs = require("fs");

// Linking to where questions, shapes and logo generated
const questions = require("./lib/question.js");
const Shape = require("./lib/shapes.js");
const fileName = "./examples/logo.svg";

// Function to start user input questions
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      createLogo(response);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function to create an SVG file with file named `logo.svg`
function createLogo(response) {
  const svg = Shape(response);
  fs.writeFile(
    fileName,
    svg,
    () => console.log("-----Generated logo.svg-----")
    // A text "Generated logo.svg" is printed in the command line
  );
}

// Function call to initialize app
init();
