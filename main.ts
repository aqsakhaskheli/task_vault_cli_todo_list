#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let conditions = true ;

console.log(chalk.blue.bold("\n \t Wellcome to Task Vault CLI - Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter your new task:")
        }
    ]);
    todolist.push(addTask.task);
    console.log(chalk.white.bold(`${addTask.task} Your task added in Todo-List Successfully...!!`));

    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type:"confirm",
            message: chalk.green("Do you want to add more task...??"),
            default: "false",
        }
    ]);
    conditions = addMoreTask.addmore
}
console.log(chalk.white.bold("Your Updated Todo-List:"), todolist);
