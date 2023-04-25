const mgrPrompts = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter team manager name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter team manager email',
    },
    {
        type: 'number',
        name: 'id',
        message: 'Please enter team manager ID number',
    },
    {
        type: 'number',
        name: 'office',
        message: 'Please enter team manager office number'
    },
    // {
    //     type: 'list',
    //     name: 'menu',
    //     message: 'What would you like to do?',
    //     choices: [
    //     { name: 'Add a new engineer to my team', value: 'addEngi' },
    //     { name: 'Add a new intern to my team', value: 'addIntern' },
    //     // { name: 'View my team', value: 'viewTeam' },
    //     { name: 'Quit', value: 'quit'},
    //     ],
    // }
];

const mainMenu = [
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
        { name: 'Add a new engineer to my team', value: 'addEngi' },
        { name: 'Add a new intern to my team', value: 'addInt' },
        // { name: 'View my team', value: 'viewTeam' },
        { name: 'Quit', value: 'quit'},
        ],
    }
];

const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:",
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's ID number:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email:",
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's GitHub username:"
    }
];

const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:",
    },
    {
        type: 'number',
        name: 'id',
        message: "Enter the intern's ID number:",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email:",
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:",
    }
];

const continuePrompt = [
    {
        type: 'list',
        name: 'continue',
        message: 'Would you like to add another employee?',
        choices: [
            { name: 'Yes', value: 'yes'},
            { name: 'No', value: 'no'},
        ],
    }
];

module.exports = {mgrPrompts, mainMenu, addEngineer, addIntern, continuePrompt};

    // const answer = await inquirer.prompt({
    //     type: 'input',
    //     name: 'mgrName',
    //     message: 'Please enter team manager name',
    // },        
    // {
    //     type: 'input',
    //     name: 'mgrEmail',
    //     message: 'Please enter team manager email',
    // },
    // {
    //     type: 'number',
    //     name: 'mgrId',
    //     message: 'Please enter team manager ID number',
    // },
    // {
    //     type: 'number',
    //     name: 'mgrOffice',
    //     message: 'Please enter team manager office number'
    // },
    // {
    //     type: 'list',
    //     name: 'menu',
    //     message: 'What would you like to do?',
    //     choices: [
    //     { name: 'Add a new engineer to my team', value: 'addEngi' },
    //     { name: 'Add a new intern to my team', value: 'addIntern' },
    //     // { name: 'View my team', value: 'viewTeam' },
    //     { name: 'Quit', value: 'quit'},
    //     ],
    // });

            // const menuEngi = await inquirer.prompt([
        // {
        //     type: 'input',
        //     name: 'engiName',
        //     message: "Enter the engineer's name:",
        // },
        // {
        //     type: 'input',
        //     name: 'engiId',
        //     message: "Enter the engineer's ID number:",
        // },
        // {
        //     type: 'input',
        //     name: 'engiEmail',
        //     message: "Enter the engineer's email:",
        // },
        // {
        //     type: 'input',
        //     name: 'engiGit',
        //     message: "Enter the engineer's GitHub username:"
        // },
        // {
        //     type: 'input',
        //     name: 'continue',
        //     message: 'Would you like to add another employee?',
        // }
        // ]);
