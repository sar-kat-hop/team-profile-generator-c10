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
    {
        type: 'list',
        name: 'menu',
        message: 'What would you like to do?',
        choices: [
        { name: 'Add a new engineer to my team', value: 'addEngi' },
        { name: 'Add a new intern to my team', value: 'addIntern' },
        // { name: 'View my team', value: 'viewTeam' },
        { name: 'Quit', value: 'quit'},
        ],
    }
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

module.exports = {managerQuestions, engiQuestions, internQuestions};