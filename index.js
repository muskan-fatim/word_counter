#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence for counting  the word"
    }]);
const counting = answer.sentence.trim().split(" ");
console.log(`your total word of sentence is ${counting.length}`);
