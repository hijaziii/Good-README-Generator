const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");



const generateMarkdown = require("./utils/generateMarkdown.js")



function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");

  });
}

function init() {
  const questions = [
    {
      type: "input",
      message: "Enter your Github username?",
      name: "username"
    },
    {
      type: "input",
      message: "Enter your email address?",
      name: "email"
    },
    {
      type: "input",
      message: "Enter your Project Title?",
      name: "title"
    },
    {
      type: "input",
      message: "Describe your project!",
      name: "description"
    },
    {
      type: "input",
      message: "What's your method of installment?",
      name: "installation"
    },
    {
      type: "input",
      message: "Enter your usage instructions?",
      name: "usage"
    },
    {
      type: "list",
      message: "Choose your license name:",
      name: "license",
      choices: ["AGPL", "MIT","ISC"]
    },
    {
      type: "input",
      message: "Enter how many users are contributing by inputing individually each Github username :",
      name: "contributing"
    },
    {
      type: "input",
      message: "How to run your tests:",
      name: "tests"
    },
    
  ];



  inquirer
    .prompt(questions)
    .then(function (response) {
      const badge = `![License](https://img.shields.io/badge/License-${response.license}-blue.svg)`;
      const queryUrl = `https://api.github.com/users/${response.username}`;
      axios.get(queryUrl).then(function (res) {
        response['avatar_url'] = res.data['avatar_url'];
        response['html_url'] = res.data['html_url'];
        response['location'] = res.data['location']
        let output = generateMarkdown(response, badge);
        writeToFile("README", output);

      });

    });



}

init();






