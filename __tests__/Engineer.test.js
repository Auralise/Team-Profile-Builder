const Employee = require("../lib/Employee");
const Engineer = include("../lib/Engineer");

describe("Class ititialisation", () => {
    it("Has all of the appropriate properties", () => {
        const name = "Linus";
        const id = 1;
        const email = "linus@test.com";
        const github = "torvalds"; 

        const person = new Engineer(name, id, email, github);


        expect(person.name).toBe("Linus");
        expect(person.id).toBe(2);
        expect(person.email).toBe("linus@test.com");
        expect(person.github).toBe("torvalds");

    });

    it("is an instance of Employee", () => {
        const person = new Engineer("John", 2, "john@test.com", "j0hn");

        expect(person).toBeInstanceOf(Employee);
    })
});

describe("Class methods", () => {
    it("returns the engineer's github username when getGithub() is called", () => {
        const person = new Engineer("Simone", 3, "simone@test.com", "sim0n3");

        expect(person.getGithub()).toBe("sim0n3");
    });

    it("returns the engineer's role when getRole() is called", () => {
        const person = new Engineer("Pablo", 10, "pablo@test.com", "pabl0");

        expect(person.getRole()).toBe("Engineer");
    });
});