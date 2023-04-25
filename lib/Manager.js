const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
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

    // set(officeNumber) {
    //     this.officeNumber = officeNumber;
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

    // getOfficeNumber() {
    //     return this.officeNumber;
    // }

    getSpecial() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;