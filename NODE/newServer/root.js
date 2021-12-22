const fs = require('fs');


function readFolder(folderName) {
       return fs.readdirSync(folderName);
}
function readFile(fileName) {
    console.log(fileName);
    return fs.readFileSync(fileName, {encoding: 'utf8'});
}

function createFile(fileName) {
    return fs.writeFileSync(`${fileName}.txt`,``);
}

function createFolder(newFolder) {
   return fs.mkdirSync(newFolder)
}

function updateFileName(fileName, newName) {
    return fs.renameSync(fileName,newName);
}

function updateFileContent(fileName,content) {
    return fs.appendFileSync(fileName,content);
}

function remove(fileName) {
        return fs.unlinkSync(fileName);
}

module.exports = {
    readFolder,
    readFile,
    createFile,
    createFolder,
    updateFileName,
    updateFileContent,
    delete: remove
}
