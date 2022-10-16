const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
            return validateEmail(input);
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
        type: "list",
        message: "What kind of team member do you want to add?",
        choices: [
            "Engineer",
            "Intern",
        ],
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
        name: "github",
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
        name: "school",
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
        message: "Do you want to add another team member? (y/N)",
        name: "addAnother",
        default: true,
    }

]



//TODO - implement and export inquirer functions
//TODO - construct the array of employee objects

