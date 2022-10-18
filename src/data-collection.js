const inquirer = require("inquirer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");


//Validation functions
const validateEmail = input => {
    if (input.length === 0) {
        return "Please enter an email";
    }
    //Regex matches a pattern of (alphanumeric) then if there is a single . or - or _ then requires additonal alphanumeric text before the @ symbol
    //it matches a single domain name followed by .com .net or .org (for simplicity's sake - I could theoretically extend this to meet all possible other addresses) 
    //This is followed by an optional two letter country code such as .au
    //matching is case insensitive
    else if (!input.match(/^[a-z0-9]+(?:[._-][a-z0-9]+|[a-z0-9]*)*@[a-z0-9]+\.(?:(com)|(org)|(net))(?:.[a-z]{2,2})?$/i)) {
        return "Please enter a valid email address.";
    }
    else {
        return true;
    }
}

const validateName = input => {
    if(!/[a-z]{3,}(?:\ [a-z]+)*/i.test(input)){
        return "Please enter a valid name";
    }
    else {
        return true;
    }
}

const validateGithub = input => {
    if (input.length < 3){
        return "Please enter a github username";
    }
    else if (!/[a-z0-9]{3,12}/i.test(input)){
        return "Please enter a valid github username (alphanumeric characters between 3 and 12 in length)"
    }
    else {
        return true;
    }
}

const validateSchool = input => {
    if (!/[a-z]{3,}(?:\ [a-z]+)*/i.test(input)){
        return "Please enter a valid school name";
    }
    else {
        return true;
    }
}



//question objects
const managerQuestions = [
    {  
        type: "input",
        message: "Manager's name: ",
        name: "managerName",
        validate: input => {
            return validateName(input);
        }
    },
    {
        type: "input",
        message: "Manager's email: ",
        name: "managerEmail",
        validate: input => {
            return validateEmail(input);
        }
    },
    {
        type: "number",
        message: "Managers office number: ",
        name: "managerOffice",
    },

]

//Separate questions for employees for recursive call
const employeeQuestions = [
    {
        type: "list",
        message: "What kind of team member do you want to add?",
        name: "employeeType",
        choices: [
            "Engineer",
            "Intern",
        ],
    },
    {
        type: "input",
        message: "Employee name: ",
        name: "employeeName",
        validate: input => {
            return validateName(input);
        }
    },
    {
        type: "input",
        message: "Employee's email address: ",
        name: "employeeEmail",
        validate: input => {
            return validateEmail(input);
        }
    },
    {
        type: "input",
        message: "Engineer's github: ",
        name: "employeeGithub",
        when(answers){
            switch (answers.employeeType){
                case "Engineer":
                    return true;
                default:
                    return false;
            }
        },
        validate: input => {
            return validateGithub(input);
        }

    },
    {
        type: "input",
        message: "Intern's school: ",
        name: "employeeSchool",
        when(answers){
            switch (answers.employeeType){
                case "Intern":
                    return true;
                default: 
                    return false;
            }
        },
        validate: input => {
            return validateSchool(input);
        }
    },
    {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "addAnother",
        default: true,
    }

]

const usedIds = [];

//Max and min for ID values 
const idMin = 1000;
const idMax = 9999;

//this function is to practice recursive functions. This is to emulate the ID numbers of a large organisation
const generateId = (min, max) => {
    let id = Math.floor((Math.random() * (max - min)) + min); // select random id between min and max
    if(usedIds.includes(id)){ 
        //if duplicate, try again recursively and return the base case
        return generateId(min,max);
    }
    else 
    {
        usedIds.push(id);
        return id;
    }
}

const createEmployee = answers => {
    if(answers.managerName){
        return new Manager(answers.managerName, generateId(idMin, idMax), answers.managerEmail, answers.managerOffice);
    }
    else {
        switch (answers.employeeType) {
            case "Engineer":
                return new Engineer(answers.employeeName, generateId(idMin, idMax), answers.employeeEmail, answers.employeeGithub);
            case "Intern":
                return new Intern(answers.employeeName, generateId(idMin, idMax), answers.employeeEmail, answers.employeeSchool);
            default: 
                throw new Error(`Failed to create new object. Invalid type.`);
        }
    }
}

const addNewEmployees = async employeeList => {

    const answers = await inquirer.prompt(employeeQuestions);
    employeeList.push(createEmployee(answers));

    if (answers.addAnother) return addNewEmployees(employeeList);
    else return employeeList;
}


const collectData = async () => {
    const employeeList = [];
    let answers = {};
    try {
        answers = await inquirer.prompt(managerQuestions);
    }
    catch (err) {
        throw new Error(`Failed to collect data\nError Text: ${err}`);
    }

    employeeList.push(createEmployee(answers));

    return addNewEmployees(employeeList);
}


exports.collectData = collectData;
