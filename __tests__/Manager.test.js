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

    it("returns Manager when getRole() is called", () => {
        const person = new Manager("Matt", 86, "matt@test.com", 1);

        expect(person.getRole()).toBe("Manager");
    });

    it("returns Office Number when getOfficeNum() is called", () => {
        const person = new Manager("Matt", 86, "matt@test.com", 1);

        expect(person.getOfficeNum()).toBe(1);
    });

    it("returns the correct Unicode value string when getLogo() is called", () => {
        const person = new Manager("Ari", 4, "ari@test.com");

        expect(person.getLogo()).toBe("1F3E2");
    });
})