const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = "Manager";
        this.logo = "1F3E2";
    }

    getOfficeNum() {
        return this.officeNumber;
    }
}

module.exports = Manager;