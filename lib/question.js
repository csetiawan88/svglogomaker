// Create an array of questions for user input.
const questions = [
  {
    type: "input",
    message: "Please enter text (3 Characters Max).", // User can enter up to three characters
    name: "text",
    validate: function (input) {
      if (input.length <= 3) {
        return true; // Input is 3 characters or less
      }
      return "Text must be 3 characters or less"; // Message for invalid input
    },
  },
  {
    type: "input",
    message: "Please enter a color for your text logo.", // user to enter a color keyword (OR a hexadecimal number)
    name: "textColor",
  },
  {
    type: "list",
    message: "Please choose a Shape.",
    choices: ["Circle", "Triangle", "Square"], // User select list of shapes as follow: circle, triangle, and square
    name: "shape",
  },
  {
    type: "input",
    message: "Please enter a color for the Shape.", // // user to enter a color keyword (OR a hexadecimal number)
    name: "shapeColor",
  },
];

// Export questions
module.exports = questions;
