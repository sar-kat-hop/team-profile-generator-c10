class Employee {
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

    getRole() {
        return "Employee"
    }
};

module.exports = Employee;