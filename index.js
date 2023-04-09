//TODO: use inquirer to collect user input in console
// const { response } = require('express');
const inquirer = require('inquirer');
const fs = require('fs');



async function start() {
    const answer = await inquirer.prompt({
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
        { name: 'Add a new engineer to my team', value: 'addEngi' },
        { name: 'Add a new intern to my team', value: 'addIntern' },
        { name: 'View my team', value: 'viewTeam' },
        { name: 'Quit', value: 'quit'},
        ],
    });

    if (answer.menu === 'addEngi') {
        // ask questions for option 1
        const menuEngi = await inquirer.prompt([
        {
            type: 'input',
            name: 'engiName',
            message: "Enter the engineer's name:",
        },
        {
            type: 'input',
            name: 'engiEmail',
            message: "Enter the engineer's email:",
        },
        {
            type: 'input',
            name: 'engiGit',
            message: "Enter the engineer's GitHub portfolio URL:"
        }
        ]);
        console.log(`New engineer added: ${menuEngi.engiName}`);
        await showReturnMessage();

    } else if (answer.menu === 'addIntern') {
        // ask questions for option 2
        const menuIntern = await inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name:",
        },
        ]);
        console.log(`New intern added: ${menuIntern.internName}`);
        await showReturnMessage();

    } else if (answer.menu === 'viewTeam') {
        // ask questions for option 3
        const menuTeam = await inquirer.prompt([
        {
            type: 'input',
            name: 'seeTeam',
            message: 'Here is your team:',
        },
        ]);
        console.log(`${menuTeam.seeTeam}`);
        await showReturnMessage();
    }
}

async function showReturnMessage() {
    const bottomBar = new inquirer.ui.BottomBar();

    while (true) {
        bottomBar.updateBottomBar(
            "Press 'm' to return to the menu or 'esc' to quit."
        );
        
        const keyPress = await keypress();

        if (keyPress === 'm') {
            return start();

        } else if (keyPress === '\u001b') { // check for "escape" key press
            process.exit(); // exit the app
        }
        // if the user presses a key other than "m" or "Esc"
        bottomBar.updateBottomBar('Ivalid key pressed. Please press "m" to return to the menu or "esc" to quit.');
        }
    }

function keypress() {
    return new Promise((resolve) => {
        process.stdin.once('data', (data) => {
            resolve(data.toString().trim());
        });
    });
}

start();


    
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