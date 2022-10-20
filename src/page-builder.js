const {buildEmployeeCard} = require('./employee-card');
const {readFile} = require('fs/promises');

//Read the template.html file for a starting point
const readTemplate = async () => {
    return await readFile("./src/template.html", {encoding: "utf-8"});
}

//Build the page using the employee objects
const buildPage = async employeeList => {
    let page = await readTemplate();

    //Replace the [[CARDS]] token in the template with the constructred employee cards
    return page.replace("[[CARDS]]", employeeList.map(employee => buildEmployeeCard(employee)).join('\n'))

}

exports.buildPage = buildPage;