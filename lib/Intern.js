const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        this.name = null;
        this.id = null;
        this.email = null;
        this.school = null;
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

    set(school) {
        this.school = school;
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

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;