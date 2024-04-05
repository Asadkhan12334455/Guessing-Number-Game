#! /usr/bin/env node

console.log(chalk.redBright("Hello"));
console.log("Guess a number between 1 to 6");

import inquirer from "inquirer";
import chalk from "chalk";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: chalk.greenBright("Please guess anumber between 1-10",)
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log(chalk.blueBright("Congratualation! you gussed right number."));
  console.log(chalk.blueBright("You won,"));
} else {
  console.log(chalk.redBright("Your are wrong number"));
  console.log(chalk.redBright("Please try again"));
}
