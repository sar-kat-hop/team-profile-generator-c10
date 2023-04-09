class Employee {
    constructor() {
        this.name = null;
        this.id = null;
        this.email = null;
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