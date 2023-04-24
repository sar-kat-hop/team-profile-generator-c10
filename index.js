//TODO: use inquirer to collect user input in console
// const { response } = require('express');
const inquirer = require('inquirer');
// const fs = require('fs'); //move to templateHemper.js
// const { Engineer, Intern, Manager } = require('./lib');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { mgrPrompts, mainMenu, addEngi, addIntern, continuePrompt } = require('./lib/questions');

const renderPage = require('./src/templateHelper')

let teamMembers = []; //push new teammates to array to pass to render html fxn

async function mainMenu() {
    const action = await inquirer.prompt(mainMenu);

    if (action.addEngi) {
        const newEngi = await inquirer.prompt(addEngi);

        const engineer = new Engineer (newEngi.name, newEngi.id, newEngi.email, newEngi.github);

        teamMembers.push(engineer);

        console.log(`New engineer added: ${menuEngi.engiName}`);

        await continueMenu();
    }

    if (action.addIntern) {
        const newIntern = await inquirer.prompt(addIntern);

        const intern = new Intern (newIntern.name, newIntern.id, newIntern.email, newIntern.school);

        teamMembers.push(intern);

        console.log(`New intern added: ${newIntern.name}`);

        await continueMenu();
    }

    else if (action.quit) {
        if (!teamMembers) {
            console.log('No employees added to team. Closing Team Builder. Gooybye!');
        } else {
            renderPage(teamMembers);
        }
        // renderPage()
        process.exit();
    }
}

async function continueMenu() {
    const action = await inquirer.prompt(continuePrompt);
}

async function start() {
    console.log("Welcome to TeamBuilder. Please follow the prompts to get started.");

    const answer = await inquirer.prompt(mgrPrompts);
    const manager = new Manager(answer.name, answer.email, answer.id, answer.office);
    teamMembers.push(manager);

    console.log(manager);
    console.log(`Hi, ${answer.name}.`);

    await mainMenu();
}
    //add engineer option
    // if (answer.menu === 'addEngi') {
    //     // const menuEngi = await inquirer.prompt([
    //     // {
    //     //     type: 'input',
    //     //     name: 'engiName',
    //     //     message: "Enter the engineer's name:",
    //     // },
    //     // {
    //     //     type: 'input',
    //     //     name: 'engiId',
    //     //     message: "Enter the engineer's ID number:",
    //     // },
    //     // {
    //     //     type: 'input',
    //     //     name: 'engiEmail',
    //     //     message: "Enter the engineer's email:",
    //     // },
    //     // {
    //     //     type: 'input',
    //     //     name: 'engiGit',
    //     //     message: "Enter the engineer's GitHub username:"
    //     // },
    //     // {
    //     //     type: 'input',
    //     //     name: 'continue',
    //     //     message: 'Would you like to add another employee?',
    //     // }
    //     // ]);
        
    //     //then, make new engineer object here
    //     // const engineer = new Engineer(menuEngi.name, menuEngi.engiId, menuEngi.engiEmail, menuEngi.engiGit);
    //     // teamMembers.push(engineer);
    //     const newEngi = await inquirer.prompt(addEngi);
    //     const engineer = new Engineer (newEngi.name, newEngi.id, newEngi.email, newEngi.github);
    //     teamMembers.push(engineer);
    //     console.log(`New engineer added: ${menuEngi.engiName}`);

            // if (menuEngi.continue) {

            // }

        // await showReturnMessage();

    //intern prompts
    // } else if (answer.menu === 'addIntern') {
    //     // ask questions for option 2
    //     const menuIntern = await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'internName',
    //         message: "Enter the intern's name:",
    //     },
    //     {
    //         type: 'number',
    //         name: 'internId',
    //         message: "Enter the intern's ID number:",
    //     },
    //     {
    //         type: 'input',
    //         name: 'internEmail',
    //         message: "Enter the intern's email:",
    //     },
    //     {
    //         type: 'input',
    //         name: 'internSchool',
    //         message: "Enter the intern's school:",
    //     }
    //     ]);

        //then, make new intern object here
        // const intern = new Intern(menuIntern.name, menuIntern.internId, menuIntern.internEmail, menuIntern.internSchool);
        // teamMembers.push(intern);

        // console.log(`New intern added: ${menuIntern.internName}`);

        // await showReturnMessage();

    // } else if (answer.menu === 'quit') {
    //     console.log("Exiting app. Goodbye!");
    //     process.exit();
    // };

    // } else if (answer.menu === 'viewTeam') {
    //     // ask questions for option 3
    //     const menuTeam = await inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'seeTeam',
    //         message: 'Here is your team:',
    //     },
    //     ]);
        // console.log(`${menuTeam.seeTeam}`);
        //additional fxnality needed to show team in console
        // await showReturnMessage();
// }

//TODO: add ability to render user input in html on exiting app
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
            // await renderPage(teamMembers); //await needed?
            renderPage(teamMembers);
            console.log("Rendered HTML. Now exiting the program.");
            process.exit(); // exit the app
            //TODO: call fxn to render html here!
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

// const managerQuestions = [
//     {
//         type: 'input',
//         name: 'mgrName',
//         message: 'Please enter team manager name',
//     },
//     {
//         type: 'input',
//         name: 'mgrEmail',
//         message: 'Please enter team manager email',
//     },
//     {
//         type: 'number',
//         name: 'mgrId',
//         message: 'Please enter team manager ID number',
//     },
//     {
//         type: 'number',
//         name: 'mgrOffice',
//         message: 'Please enter team manager office number'
//     },
//     {
//         type: 'list',
//         name: 'menu',
//         message: 'What would you like to do?',
//         choices: [
//         { name: 'Add a new engineer to my team', value: 'addEngi' },
//         { name: 'Add a new intern to my team', value: 'addIntern' },
//         // { name: 'View my team', value: 'viewTeam' },
//         { name: 'Quit', value: 'quit'},
//         ],
//     }
// ];

// const engiQuestions = [
//     {
//         type: 'input',
//         name: 'engiName',
//         message: "Enter the engineer's name:",
//     },
//     {
//         type: 'input',
//         name: 'engiId',
//         message: "Enter the engineer's ID number:",
//     },
//     {
//         type: 'input',
//         name: 'engiEmail',
//         message: "Enter the engineer's email:",
//     },
//     {
//         type: 'input',
//         name: 'engiGit',
//         message: "Enter the engineer's GitHub username:"
//     }
// ];

// const internQuestions = [
//     {
//         type: 'input',
//         name: 'internName',
//         message: "Enter the intern's name:",
//     },
//     {
//         type: 'number',
//         name: 'internId',
//         message: "Enter the intern's ID number:",
//     },
//     {
//         type: 'input',
//         name: 'internEmail',
//         message: "Enter the intern's email:",
//     },
//     {
//         type: 'input',
//         name: 'internSchool',
//         message: "Enter the intern's school:",
//     }
// ];

    
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
            