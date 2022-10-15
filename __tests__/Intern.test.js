const Employee = require("../lib/Employee");
const Intern = require('../lib/Intern');

describe("Class initialisation", () => {
    it("has all of the appropriate properties", () => {
        const name = "Matt";
        const id = 86;
        const email = "matt@test.com";
        const school = "SomeU";


        const person = new Intern(name, id, email, school);


        expect(person.name).toBe(name);
        expect(person.id).toBe(id);
        expect(person.email).toBe(email);
        expect(person.school).toBe(school);
    });

    it("is an instance of Employee", () => {
        const person = new Intern("John", 2, "john@test.com", "AnotherU");

        expect(person).toBeInstanceOf(Employee);
    })
});

describe("Class functions", () => {
    it("returns school when getSchool() called", () => {
        const person = new Intern("Matt", 86, "matt@test.com", "SomeU");

        expect(person.getSchool()).toBe("SomeU");
    })

    it("returns intern when getRole() is called", () => {
        const person = new Intern("Matt", 86, "matt@test.com", "SomeU");

        expect(person.getRole()).toBe("Intern");
    })
})