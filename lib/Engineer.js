const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //since these are defined in Employee, are they needed here?

    getName() {
        return this.name;
    };
    
    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };

    // getGithub() {
    //     return this.github;
    // }

    getSpecial() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;