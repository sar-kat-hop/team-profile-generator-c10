const { error } = require('console');
const fs = require('fs');

function renderPage(teamData) {
    let teamData = [];

    //need to make sure html framework appended on its own, sandwiching employee cards
    const htmlHead = 
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

    `;

    const htmlFoot =
    `
        </div>
    </body>
    <footer></footer>
    </html>
    `;

    for (const employee of teamData) {
        const employeeCard = 
        `
        <div class="card border m-3" style="height: 250px; width: 275px">
            <div class="card-header text-center p-3 bg-info text-white fs-5">
            ${teamData.getRole()}
            </div>
            <div class="card-body">
                <p class="fw-light fst-italic lh-1 text-wrap text-center p-0">
                ${teamData.name}
                </p>
            <ul class="fw-light">
                <li class="lw-light lh-1 text-wrap p-0"> <b>ID: </b>
                ${teamData.id}
                </li>
                <li class="lw-light lh-1 text-wrap p-0"> <b>Email: </b>
                <a href="mailto:Email">${teamData.email}</a></li>
                <li class="lw-light lh-1 text-wrap p-0"> <b>
                ${Object.keys(teamData).slice(-1)}: </b>${teamData.officeNumber || teamData.gitHub || teamData.school }
                </li>
            </ul>
            </div>
        </div>
        `;

        teamData.push(employeeCard);
    }

    const htmlPage = htmlHead + teamData + htmlFoot;

    //add everything together to write to page
    fs.writeFile("./dist/index.html", htmlPage, () => {
        if(error) console.log("Error rendering html. ", error);
    });

}

module.exports = renderPage;