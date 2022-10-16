const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name,id,email);
        this.school = school;
        this.role = "Intern";
        this.logo = "1F392";
    }

    getSchool(){
        return this.school;
    }
}

module.exports = Intern;