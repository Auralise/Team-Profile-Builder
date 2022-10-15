const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe("Class initialisation", () => {
    it("has all of the appropriate properties", () => {
        const name = "Daniel";
        const id = 14;
        const email = "dan@test.com";
        const officeNumber = 1;


        const person = new Manager(name, id, email, officeNumber);


        expect(person.name).toBe(name);
        expect(person.id).toBe(id);
        expect(person.email).toBe(email);
        expect(person.officeNumber).toBe(officeNumber);
    });

    it("is an instance of Employee", () => {
        const person = new Manager("John", 2, "john@test.com", 5);

        expect(person).toBeInstanceOf(Employee);
    })
});

describe("Class functions", () => {
    it("returns school when getSchool() called", () => {
        const person = new Manager("Matt", 86, "matt@test.com", "SomeU");

        expect(person.getSchool()).toBe("SomeU");
    })

    it("returns Manager when getRole() is called", () => {
        const person = new Manager("Matt", 86, "matt@test.com", "SomeU");

        expect(person.getRole()).toBe("Manager");
    })
})