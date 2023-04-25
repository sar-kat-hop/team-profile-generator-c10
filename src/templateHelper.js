const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

function renderPage(teamMembers) {

    // let specialInfo = ''; //for writing `if/else` statement to grab office, github, or school based on type of employee
    
    //refactor card-creation;
    // grab unique info for each ee type to render conditionally, using instanceOf
    // const employeeCard = teamMembers.map((employee) => {
        // return `

    teamMembers.forEach(employee => {
        let employeeCard = `
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
            `;

            if (employee instanceof Manager) {
                employeeCard += `
                <li class='lw-light lh-1 text-wrap p-0'> Office No: ${employee.getSpecial()}</li></ul>
                `;

            } else if (employee instanceof Engineer) {
                employeeCard += `
                <li class='lw-light lh-1 text-wrap p-0'> GitHub: <a href='https://github.com/${employee.getSpecial()}'>${employee.getSpecial()}</a></li></ul>
                `;

            } else if (employee instanceof Intern) {
                employeeCard += `
                <li class='lw-light lh-1 text-wrap p-0'> School: ${employee.getSpecial()}</li></ul>
                `;
            }

            employeeCard += `
                </div>
            </div>
            `;

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
            fs.writeFileSync(fileName, htmlPg, {flag: 'a'});
                console.log('Employee info written to index.html!');
        });
}

module.exports = renderPage;