const {collectData} = require('./src/data-collection')
const {buildPage} = require("./src/page-builder");
const {writeFile} = require("fs/promises");




const writePage = async (page) => {
    await writeFile("./dist/index.html", page, {encoding: 'utf-8'});
}

const init = async () => {
    const output = await collectData();
    writePage(await buildPage(output));
}


init();