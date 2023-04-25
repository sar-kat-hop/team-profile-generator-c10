const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    // setName(name) {
    //     this.name = name;
    // }

    // setId(id) {
    //     this.id = id;
    // }

    // set(email) {
    //     this.email = email;
    // }    

    // set(school) {
    //     this.school = school;
    // }

    getName() {
        return this.name;
    };
    
    getId() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };

    // getSchool() {
    //     return this.school;
    // }

    getSpecial() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;