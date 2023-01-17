//TODO: use inquirer to collect user input in console
// const { response } = require('express');
const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
        {
            type: 'input',
            message: 'Please enter team manager name',
            name: 'mgrName',
        },
        {
            type: 'number',
            message: 'Please enter team manager employee ID',
            name: 'mgrId',
        },
        {
            type: 'input',
            message: 'Please enter team manager email address',
            name: 'mgrEmail',
        },
        {
            type: 'number',
            message: 'Please enter team manager office number',
            name: 'mgrOffice',
        },
        {
            type: 'list',
            message: 'What would you like to do?',
            choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
            name: 'action',
        },
    ]);
    
    const performAction = async(action) => {
        switch(action) {
            case 'Add an engineer to my team' : // new prompts specific to engineer//
            ;
                break;
            case 'Add an intern to my team' : // new prompts specific to intern//
            ;
                break;
            default:
                break;
        }
    }
    


    //save user input for team mgr info into json file for info verification purposes?
    // .then((data) => {
        // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        
        // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        //     err ? console.log(err) : console.log('Successfully saved team manager information.')
        //     );
        
        // console.log("Hello, " + `${data.name}` + ".");

        //TODO: present user with menu allowing them to add an employee or intern to their team.
            //look up inquirer syntax for this... user must have entered team manager info to get to menu

    //     prompt([
    //         {
    //             type: 'list',
    //             message: 'What would you like to do?',
    //             choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
    //             name: 'action',
    //         }
    //     ]

    //     )

    // });

    // inquirer
    //     .prompt.next([
    //         {
    //             type: 'list',
    //             message: 'What would you like to do?',
    //             choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
    //             name: 'action',
    //         }
    //     ])
    //         .then((answer) => {
    //             if (`${answer.action}` === 'Add an engineer to my team') {
    //                 inquirer.prompt([])
    //             } else if (`${answer.action}` === 'Add an intern to my team') {
    //                 inquirer.prompt([])
    //             } else {
    //                 console.log("Goodbye")
    //             }
                    
    //         })
            

//TODO: write user input to index.html file (check activities for fs read and write fxns, make sure updates are persistant and not overwriting past changes)
    //TODO: also check activities for past example of generating html dynamically using template literals

//TODO: deploy to heroku?