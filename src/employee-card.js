const getClassSpecificAttr = employee => {
    if (employee.hasOwnProperty("officeNumber")) {
        return `
            <li class="list-group-item">
                Office Number: ${employee.getOfficeNum()}
            </li>`;
    } 
    else if (employee.hasOwnProperty("github")) {
        return `
            <li class="list-group-item">
                Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>
            </li>`;
    } 
    else if (employee.hasOwnProperty("school")) {
        return `
            <li class="list-group-item">
                School: ${employee.getSchool()}
            </li>`;
    } 
    else {
        return ``;
    }
}

const buildEmployeeCard = employee => {

    const card = `
<section class="card m-3">
    <div class="card-header bg-secondary text-light">
        <h2>${employee.getName()}</h2>
        <h3>&#x${employee.getLogo()}; ${employee.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">
                Employee id: ${employee.getId()}
            </li>
            <li class="list-group-item">
                Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a>
            </li>
            ${getClassSpecificAttr(employee)}
        </ul>
    </div>
</section>`

    return card;
}


exports.buildEmployeeCard = buildEmployeeCard;