#! /usr/bin/env node
import inquirer from 'inquirer';
const tasks = [];
let continueAdding = true;
while (continueAdding) {
    const responses = await inquirer.prompt([
        {
            type: 'input',
            name: 'task',
            message: 'Please enter a task to add to your todo list:'
        },
        {
            type: 'confirm',
            name: 'more',
            message: 'Would you like to add another task?',
            default: false
        }
    ]);
    const { task, more } = responses;
    console.log(responses);
    continueAdding = more;
    if (task.trim()) {
        tasks.push(task);
    }
    else {
        console.log('Please enter a valid task.');
    }
}
if (tasks.length > 0) {
    console.log('Here is your Todo List:');
    tasks.forEach((task) => {
        console.log(task);
    });
}
else {
    console.log('No tasks were added to the todo list.');
}
