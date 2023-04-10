//TODO: use inquirer to collect user input in console
// const { response } = require('express');
const inquirer = require('inquirer');
// const fs = require('fs'); //move to templateHemper.js
// const { Engineer, Intern, Manager } = require('./lib');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const renderPage = require('./src/templateHelper')

const managerQuestions = [
    {
        type: 'input',
        name: 'mgrName',
        message: 'Please enter team manager name',
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: 'Please enter team manager email',
    },
    {
        type: 'number',
        name: 'mgrId',
        message: 'Please enter team manager ID number',
    },
    {
        type: 'number',
        name: 'mgrOffice',
        message: 'Please enter team manager office number'
    },
    // {
    //     type: 'list',
    //     name: 'menu',
    //     message: 'What would you like to do?',
    //     choices: [
    //     { name: 'Add a new engineer to my team', value: 'addEngi' },
    //     { name: 'Add a new intern to my team', value: 'addIntern' },
    //     { name: 'Quit', value: 'quit'},
    //     ],
    // }
];

const engiQuestions = [
    {
        type: 'input',
        name: 'engiName',
        message: "Enter the engineer's name:",
    },
    {
        type: 'input',
        name: 'engiId',
        message: "Enter the engineer's ID number:",
    },
    {
        type: 'input',
        name: 'engiEmail',
        message: "Enter the engineer's email:",
    },
    {
        type: 'input',
        name: 'engiGit',
        message: "Enter the engineer's GitHub username:"
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "Enter the intern's name:",
    },
    {
        type: 'number',
        name: 'internId',
        message: "Enter the intern's ID number:",
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "Enter the intern's email:",
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "Enter the intern's school:",
    }
];

const menuQuestions = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
        { name: 'Add a new engineer to my team', value: 'addEngi' },
        { name: 'Add a new intern to my team', value: 'addIntern' },
        { name: 'Quit', value: 'quit'},
        ],
    }
];

const addMore =
    {
        type: 'confirm',
        name: 'continueAdding',
        message: 'Would you like to add another teammate?',
        // default: false,
    };

let employees = [];

// async function askMe() {
//     const mgrAns = await inquirer.prompt(managerQuestions);
//     const manager = new Manager(mgrAns.mgrName, mgrAns.mgrId, mgrAns.mgrEmail, mgrAns.mgrOffice);

//     employees.push(manager);
//     console.log("Welcome, " + mgrAns.mgrName + ".");

//     if(mgrAns) {
//         mainMenu();
//     } else {
//         console.log("Error. Please restart the program");
//     }
// };

// askMe();

async function mainMenu() {
        // const menu = await inquirer.prompt(menuQuestions);
        // const { choice: employee } = await inquirer.prompt(menuQuestions);
       
        // if (employee === 'addEngi') {
        //     const addEngi = await inquirer.prompt(engiQuestions);

        //     const engineer = new Engineer(addEngi.engiName, addEngi.engiId, addEngi.engiEmail, addEngi.engiGit);
            
        //     employees.push(engineer);
        //     console.log("New engineer added: " + addEngi.engiName);
            
        //     // return inquirer.prompt(menuQuestions); //this only works one time; when one employee is entered, the menu appears but app crashes once you choose another option
            
        // } else if (employee === 'addIntern') {
        //     const addIntern = await inquirer.prompt(internQuestions);
        //     const intern = new Intern(addIntern.internName, addIntern.internId, addIntern.internEmail, addIntern.internSchool);
            
        //     employees.push(intern);
        //     console.log("New intern added: " + addIntern.internName);
            
        //     // return inquirer.prompt(menuQuestions);
        // };

        const mgrAns = await inquirer.prompt(managerQuestions);
        const manager = new Manager(mgrAns.mgrName, mgrAns.mgrId, mgrAns.mgrEmail, mgrAns.mgrOffice);
    
        employees.push(manager);
        console.log("Welcome, " + mgrAns.mgrName + ".");    

        let continueAdding = true;

        while (continueAdding) {
            const { choice: employee } = await inquirer.prompt([
                {
                    type: 'list',
                    name: 'choice',
                    message: 'Which kind of teammate would you like to add?',
                    choices: ['Engineer', 'Intern'],
                },
            ]);

            if (employee === 'Engineer') {
                const addEngi = await inquirer.prompt(engiQuestions);
    
                const engineer = new Engineer(addEngi.engiName, addEngi.engiId, addEngi.engiEmail, addEngi.engiGit);
                
                employees.push(engineer);
                console.log("New engineer added: " + addEngi.engiName);

            } else if (employee === 'Intern') {
                const addIntern = await inquirer.prompt(internQuestions);
                const intern = new Intern(addIntern.internName, addIntern.internId, addIntern.internEmail, addIntern.internSchool);
                
                employees.push(intern);
                console.log("New intern added: " + addIntern.internName);
            }

            const { continueAddingAnswer } = await inquirer.prompt(addMore);
            // continueAdding = continueAddingAnswer;
            if (continueAddingAnswer === "Yes") {
                continueAdding = true;
            } else {
                renderPage();
                process.exit();
            }
        };

        console.log("Finished adding new team members.");
        console.log(employees);
    };

mainMenu();

// inquirer.prompt(managerQuestions)
//     .then((answers) => {
//         // Create a new Manager object
//         const manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOffice);
//         // Push the new object to the employees array
//         employees.push(manager);

//     // Ask the user if they want to add an Engineer or Intern
//     inquirer.prompt(menuQuestions)
//         .then((answers) => {
//             // Create a new Engineer or Intern object based on the user's answer
//             if (answers.menu === 'engineer') {
//                 inquirer.prompt(engiQuestions)
//                     .then((answers) => {
//                         const engineer = new Engineer(answers.engiName, answers.engiId, answers.engiEmail, answers.engiGit);
//                         employees.push(engineer);

//                         console.log("New engineer added: " + answers.engiName);
//                         inquirer.prompt(menuQuestions);
//                     });

//             } else if (answers.menu === 'intern') {
//                 inquirer.prompt(internQuestions) 
//                     .then((answers) => {
//                         const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
//                         employees.push(intern);

//                         console.log("New intern added: " + answers.internName);
//                         inquirer.prompt(menuQuestions);
//                     });
//             };

//             // Render the employee data to an HTML page
//             // renderPage(employees);
//             console.log(employees);

//         });
//     });
