class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
        this.logo = "1F9E2"
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }

    //Return a value to be used as a unicode character on the webpage
    getLogo() {
        return this.logo;
    }
}

module.exports = Employee;