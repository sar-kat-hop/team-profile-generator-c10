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


//refactor using async
// async function start() {
//     const answer = await inquirer.prompt({
//             type: 'list',
//             name: 'userAction',
//             message: 'What would you like to do?',
//             choices: [
//                 { name: 'Add an engineer to my team', value: 'addEngi'},
//                 { name: 'Add an intern to my team', value: 'addIntern'},
//                 { name: 'View my team', value: 'viewTeam'},
//                 { name: 'exit', value: 'Quit'},
//             ],
//         });

//     if (answer.value === 'addEngi') {
//         const newEngi = await inquirer.prompt([
//             {
//                 type: 'input',
//                 message: "Please enter the engineer's name",
//                 name: 'engiName',
//             },
//             {
//                 type: 'input',
//                 message: "Please enter the engineer's email address",
//                 name: 'engiEmail',
//             },
//             {
//                 type: 'number',
//                 message: "Please enter the engineer's GitHub username",
//             },
//         ]);
//         console.log("New engineer added: " + newEngi);
//         //wait until action is performed before asking if user wants to go back
//         await showReturnMsg();

//     } else if (answer.value === 'addIntern') {
//         const newIntern = await inquirer.prompt([
//             {
//                 type: 'input',
//                 message: "Please enter the intern's name",
//                 name: 'internName',
//             },
//             {
//                 type: 'number',
//                 message: "Please enter the intern's ID number",
//                 name: 'internId',
//             },
//             {
//                 type: 'input',
//                 message: "Please enter the intern's email address",
//                 name: 'internEmail',
//             },
//             {
//                 type: 'number',
//                 message: "Please enter the intern's school",
//                 name: 'internSchool',
//             },
//         ]);
//         console.log("New intern added: " + newIntern);
//         await showReturnMsg();

//     } else if (answer.value === 'viewTeam') {

//     }
// }

// async function showReturnMsg() {
//     const bottomBar = new inquirer.ui.BottomBar();
//     bottomBar.updateBottomBar("Press 'm' to return to the menu or 'esc' to quit.");
//     const keyPress = await keypress();

//     if (keyPress === "m") {
//         start();
//     } else if (keyPress === "\u001b") {
//         bottomBar.updateBottomBar("Goodbye.");
//         process.exit();
//     } else {
//         bottomBar.updateBottomBar("Invalid key pressed. Please press 'm' to go back to the menu or 'esc' to quit.");
//     }
// };

// function keypress() {
//     return new Promise((resolve) => {
//         process.stdin.once("data", (data) => {
//             resolve(data.toString().trim());
//         });
//     });
// };

// start();

// inquirer.prompt([
//         {
//             type: 'input',
//             message: 'Please enter team manager name',
//             name: 'mgrName',
//         },
//         {
//             type: 'number',
//             message: 'Please enter team manager employee ID',
//             name: 'mgrId',
//         },
//         {
//             type: 'input',
//             message: 'Please enter team manager email address',
//             name: 'mgrEmail',
//         },
//         {
//             type: 'number',
//             message: 'Please enter team manager office number',
//             name: 'mgrOffice',
//         },
//         {
//             type: 'list',
//             message: 'What would you like to do?',
//             choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
//             name: 'action',
//         },
//     ]);
//     //change switch fxn to if statement? 
//     const performAction = async(action) => {
//         switch(action) {
//             case 'Add an engineer to my team' : // new prompts specific to engineer
//                 inquirer.prompt([
//                     {
//                         type: 'input',
//                         message: "Please enter the engineer's name",
//                         name: 'engiName',
//                     },
//                     {
//                         type: 'number',
//                         message: "Please enter the engineer's ID number",
//                         name: 'engiId',
//                     },
//                     {
//                         type: 'input',
//                         message: "Please enter the engineer's email address",
//                         name: 'engiEmail',
//                     },
//                     {
//                         type: 'number',
//                         message: "Please enter the engineer's GitHub username",
//                     },
//                         ]).then((engiInfo) => {
//                             //save to json file?
//                             //append to html
//                             console.log("New engineer: " + engiInfo);
//                                 inquirer.prompt([
//                                     {
//                                         type: 'list',
//                                         message: 'What would you like to do?',
//                                         choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
//                                         name: 'action',
//                                     },
//                                 ]);
//                             });
//                     break;
//                 case 'Add an intern to my team' : // new prompts specific to intern
//                     inquirer.prompt([
//                         {
//                             type: 'input',
//                             message: "Please enter the intern's name",
//                             name: 'internName',
//                         },
//                         {
//                             type: 'number',
//                             message: "Please enter the intern's ID number",
//                             name: 'internId',
//                         },
//                         {
//                             type: 'input',
//                             message: "Please enter the intern's email address",
//                             name: 'internEmail',
//                         },
//                         {
//                             type: 'number',
//                             message: "Please enter the intern's school",
//                             name: 'internSchool',
//                         },
//                     ]).then((internInfo) => {
//                         //save to json file?
//                         //append to html
//                         console.log("New intern: " + internInfo);
//                         inquirer.prompt([
//                             {
//                                 type: 'list',
//                                 message: 'What would you like to do?',
//                                 choices: ['Add an engineer to my team', 'Add an intern to my team', new inquirer.Separator(), 'Quit'],
//                                 name: 'action',
//                             },
//                         ]);

//                     })
//                 ;
//                     break;
//                 default:
//                     break;
//         }        
//         };

        //wait for user to make choice before proceeding


        //does not work:
        // const init = async() => {
        //     let action;
        //     while (action != 'Quit') {
        //         action = (await prompt().action); 
        //         performAction(action);
        //     }
        // }

    
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