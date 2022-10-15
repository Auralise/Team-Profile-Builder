const Employee = require('../lib/Employee');


describe("Initialisation", () => {
    it("Has all relevant properties", () => {
        const name = "John";
        const id = 2;
        const email = "john@test.com";


        const person = new Employee(name, id, email);


        expect(person.name).toBe("John");
        expect(person.id).toBe(2);
        expect(person.email).toBe("john@test.com");
    });
});

describe("Class methods", () => {
    it("returns employee name when getName() is called", () => {
        const person = new Employee("Sarah", 5, "sarah@test.com");

        expect(person.getName()).toBe("Sarah");
    });

    it("returns Employee ID when getId() is called", () => {
        const person = new Employee("Steven", 9, "steven@test.com");

        expect(person.getId()).toBe(9);
    });

    it("returns Employee email when getEmail() is called", () => {
        const person = new Employee("Fred", 8, "fred@test.com");

        expect(person.getEmail()).toBe("fred@test.com");
    });

    it("returns Employee role when getRole() is called", () => {
        const person = new Employee("Ari", 4, "ari@test.com");

        expect(person.getRole()).toBe("Employee");
    });
});
