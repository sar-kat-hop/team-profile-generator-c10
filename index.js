//TODO: use inquirer to collect user input in console
// const { response } = require('express');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter team manager name',
            name: 'mgr-name',
        },
        {
            type: 'input',
            message: 'Please enter team manager employee ID',
            name: 'mgr-id',
        },
        {
            type: 'input',
            message: 'Please enter team manager email address',
            name: 'mgr-email',
        },
        {
            type: 'input',
            message: 'Please enter team manager office number',
            name: 'mgr-office',
        }
    ])
    //process/parse data to print console log reiterating what user has entered and prompting user to accept or redo. If accept, user is presented with menu and can either add employee or engineer.
    //data validation needed for mgr info?
        //TODO: look up inquirer syntax for above fxnality

    .then((data)) => {
        
    }

//TODO: write user input to index.html file (check activities for fs read and write fxns, make sure updates are persistant and not overwriting past changes)

//TODO: deploy to heroku?