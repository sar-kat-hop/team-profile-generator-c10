const inquirer = require('inquirer');
const fs = require('fs'); //move to templateHemper.js
// const { Engineer, Intern, Manager } = require('./lib');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const { mgrPrompts, mainMenu, addEngineer, addIntern, continuePrompt } = require('./lib/questions');

// const renderPage = require('./src/templateHelper')

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
            const newEngineer = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
            teamMembers.push(newEngineer);
                console.log(`Added engineer ${engineer.name} to the team.`);
                    continueMenu();
    });
};

function addNewIntern() {
    // const intern = new Intern (newIntern.name, newIntern.id, newIntern.email, newIntern.school)
    inquirer.prompt(addIntern)
        .then((intern) => {
            const newIntern = new Intern(intern.name, intern.id, intern.email, intern.school);
            teamMembers.push(newIntern);
                console.log(`Added intern ${intern.name} to the team.`);
                    continueMenu();
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

async function start() {
    console.log("Welcome to TeamBuilder. Please follow the prompts to get started.");

    await inquirer.prompt(mgrPrompts)
        .then((manager) => {
            const newManager = new Manager(manager.name, manager.id, manager.email, manager.office);
            teamMembers.push(newManager);
                console.log(`Hi, ${manager.name}. Let's get started.`);
                    menu();
        });
}

function renderPage(teamMembers) {
    // let teamCards = [];

    let specialInfo = ''; //for writing `if/else` statement to grab office, github, or school based on type of employee

    // const htmlHead = 
    // `
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    //     <title>TeamBuilder</title>
    // </head>

    // <body class="bg-light">
    //     <header class="bg-info p-4">
    //         <div class="container-fluid text-center text-white">
    //             <h1>TeamBuilder</h1>
    //         </div>
    //     </header>

    //     <div class="container-fluid">
    //         <h2 class="text-center fs-3 m-4 fst-italic">My Team</h2>
    //     </div>

    //     <div class="d-flex flex-wrap justify-content-center bd-highlight m-5">

    // `;

    // const htmlFoot =
    // `
    //     </div>
    // </body>
    // <footer></footer>
    // </html>
    // `;

    // grab unique info for each ee type to render conditionally, using instanceOf
    
    teamMembers.forEach(employee => {
        if (employee instanceof Manager) {
            let specialInfo = `Office No.: ${employee.office}`;
        } else if (employee instanceof Engineer) {
            let specialInfo = `GitHub Username: ${employee.github}`;
        } else if (employee instanceof Intern) {
            let specialInfo = `School: ${employee.school}`;
        }

        console.log(specialInfo);
            return specialInfo;
    });

    //refactor card-creation
    const employeeCard = teamMembers.map((employee) => {
        return `
        <div class="card border m-3" style="height: 250px; width: 275px">
        <div class="card-header text-center p-3 bg-info text-white fs-5">
            ${employee.getRole()}
        </div>
        <div class="card-body">
            <p class="fw-light fst-italic lh-1 text-wrap text-center p-0">
                ${employee.name}
            </p>
        <ul class="fw-light">
            <li class="lw-light lh-1 text-wrap p-0"> <b>ID: </b>
                ${employee.id}
            </li>
            <li class="lw-light lh-1 text-wrap p-0"> <b>Email: </b>
            <a href="mailto:Email">${employee.email}</a></li>
            <li class="lw-light lh-1 text-wrap p-0"> <b>
                ${specialInfo}
            </li>
        </ul>
        </div>
    </div>
    `;
    }).join('');

    const htmlPg = 
    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <title>TeamBuilder</title>
    </head>

        <body class="bg-light">
            <header class="bg-info p-4">
                <div class="container-fluid text-center text-white">
                    <h1>TeamBuilder</h1>
                </div>
            </header>

            <div class="container-fluid">
                <h2 class="text-center fs-3 m-4 fst-italic">My Team</h2>
            </div>

            <div class="d-flex flex-wrap justify-content-center bd-highlight m-5">
                ${employeeCard}
            </div>

        </body>
        <footer></footer>
    </html>
    `;

    const fileName = './index.html';
    fs.writeFileSync(fileName, htmlPg);
        console.log('Employee info written to index.html!');
}


    // for (const employee of teamCards) {
    //     const employeeCard = 
    //     `
    //     <div class="card border m-3" style="height: 250px; width: 275px">
    //         <div class="card-header text-center p-3 bg-info text-white fs-5">
    //         ${employee.getRole()}
    //         </div>
    //         <div class="card-body">
    //             <p class="fw-light fst-italic lh-1 text-wrap text-center p-0">
    //             ${employee.name}
    //             </p>
    //         <ul class="fw-light">
    //             <li class="lw-light lh-1 text-wrap p-0"> <b>ID: </b>
    //             ${employee.id}
    //             </li>
    //             <li class="lw-light lh-1 text-wrap p-0"> <b>Email: </b>
    //             <a href="mailto:Email">${employee.email}</a></li>
    //             <li class="lw-light lh-1 text-wrap p-0"> <b>
    //             ${Object.keys(employee).slice(-1)}: </b>${employee.officeNumber || employee.gitHub || employee.school }
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    //     `;

    //     teamCards.push(employeeCard);
    // }

    // teamCards.forEach((employeeCard) => {
    //     const fileLoc = './dist/index/html';
    //     const content = htmlHead + employeeCard + htmlFoot;
        
        //writeFileSync will prevent the console log message from printing until it's actually written the file
//         fs.writeFileSync(fileLoc, content, (err) => {
//             if (err) console.log('ERROR: Could not save content to page.');
//             console.log(`Team saved to page. View at: //${fileLoc}`)
//         });
//     });
// }

// module.exports = renderPage;

// testing fs write
// function renderPage(teamMembers) {
//     console.log('Your team'); 
//     const filename = 'index.html';
//     const fileLoc = './';
//     const content = JSON.stringify(teamMembers);

//     fs.writeFileSync(filename, content);
//     console.log(`Wrote to ${filename}`);
// }

start();

