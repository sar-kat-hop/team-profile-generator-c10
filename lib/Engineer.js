const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        this.name = null;
        this.id = null;
        this.email = null;
        this.github = null;
    }

    setName(name) {
        this.name = name;
    }

    setId(id) {
        this.id = id;
    }

    set(email) {
        this.email = email;
    }    

    set(github) {
        this.github = github;
    }

    getName() {
        return this.name;
    };
    
    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;