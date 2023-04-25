const inquirer = require('inquirer');
// const fs = require('fs'); //move to templateHemper.js
// const { Engineer, Intern, Manager } = require('./lib');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { mgrPrompts, mainMenu, addEngineer, addIntern, continuePrompt } = require('./lib/questions');

const renderPage = require('./src/templateHelper')

let teamMembers = []; //push new teammates to array to pass to render html fxn

function menu() {
    inquirer.prompt(mainMenu).then((answer) => {
        console.log(answer);
        if (answer.menu === 'addEngi') {
            console.log('Adding new engineer...');
                addNewEngi();

        } else if (answer.menu === 'addInt') {
            console.log('Adding new intern...');
                (addNewIntern());

        } else if (answer.menu === 'quit') {
            if(!teamMembers) {
                console.log('No team members added. To add a team member, please restart the app and add a new engineer or intern from the main menu.')
                (process(exit));

            } else {
                console.log('Added new team members and rendered page.');
                renderPage(teamMembers);
                (process.exit());
            }
        }
    });
};

function addNewEngi() {
    // const engineer = new Engineer (newEngi.name, newEngi.id, newEngi.email, newEngi.github);
    inquirer.prompt(addEngineer)
        .then((engineer) => {
            // pushToTeam(engineer)
            teamMembers.push(engineer);
            console.log('Pushed new engineer to array');
            continueMenu();
                // .then(console.log(`Added engineer ${newEngi.name} to the team.`))
                    // .then(continueMenu());
    });
};

function addNewIntern() {
    // const intern = new Intern (newIntern.name, newIntern.id, newIntern.email, newIntern.school)
    inquirer.prompt(addIntern)
        .then((intern) => {
            // pushToTeam(intern)
            teamMembers.push(intern);
            console.log('Pushed new intern to array');
            continueMenu();
                // .then(console.log(`Added intern ${newIntern.name} to the team.`))
                    // .then(continueMenu());
        });
};
    
function continueMenu() {
    inquirer.prompt(continuePrompt).then((action) => {
        if (action.continue === 'yes') {
            console.log('Returning to main menu.');
            menu();
        } else {
            if(!teamMembers) {
                console.log('Closing Team Builder with no new employees added. Restart the app if you would like to add employees. Bye for now!')
                    (process.exit());
            } else {
                renderPage(teamMembers);
                    (console.log('New employees added to your team. View ./dist/index.html in your browser to see your team.'))
                        (process.exit());
            }
        }
    });
};

// async function pushToTeam() {
//     const engineer = new Engineer (engineer.name, engineer.id, engineer.email, engineer.github);
//     const intern = new Intern (intern.name, intern.id, intern.email, intern.school)
//     const manager = new Manager(manager.name, manager.email, manager.id, manager.office);

//     if (employee === engineer) {
//         teamMembers.push(engineer);
//         console.log(`Added engineer ${engineer.name} to the team.`);
//     } else if (employee === intern) {
//         teamMembers.push(intern);
//         console.log(`Added intern ${intern.name} to the team.`);
//     } else if (employe === manager) {
//         teamMembers.push(manager);
//         console.log(`Hi, ${manager.name}.`)
//     }
// };

async function start() {
    console.log("Welcome to TeamBuilder. Please follow the prompts to get started.");

    await inquirer.prompt(mgrPrompts)
        .then((manager) => {
            // pushToTeam(manager)
                // .then(menu());
                teamMembers.push(manager);
                console.log('Pushed new manager to array');
                menu();
        });
}
// function keypress() {
//     return new Promise((resolve) => {
//         process.stdin.once('data', (data) => {
//             resolve(data.toString().trim());
//         });
//     });
// }

start();

