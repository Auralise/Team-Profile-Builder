const ec = require('./employee-card');
const {readFile} = require('fs/promises');

const readTemplate = async () => {
    return await readFile("./src/template.html", {encoding: "utf-8"});
}

const buildPage = async employeeList => {
    let page = await readTemplate();

    return page.replace("[[CARDS]]", employeeList.map(employee => ec.buildEmployeeCard(employee)).join('\n'))

}

exports.buildPage = buildPage;