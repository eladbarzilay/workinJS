const fs = require('fs');


let counter =1;
function saveListToFile(){
    fs.writeFileSync('list.json', JSON.stringify(list));
    fs.writeFileSync('count.txt',String(counter))
}

module.exports = {
    readList,
    create,
    update,
    del,
    getOneTask
}

function readList() {
    list = fs.readFileSync('list.json',{encoding:'utf8'});
    return list;
}

function create(newAssyment) {
    list = JSON.parse(readList());
    counter = Number(fs.readFileSync('count.txt'))
    newAssyment.id = counter++;
    list.push(newAssyment);
    saveListToFile();
    return newAssyment;
}

function update(id) {
    list = JSON.parse(readList());
 for (i = 0; i < list.length; i++) {
     if (list[i].id == id) {
        list[i].done = list[i].done==true?list[i].done=false:list[i].done=true;
        saveListToFile();
        return list[i];
     }
 }
}
function del(id) {
    list = JSON.parse(readList());
    for (i = 0; i < list.length; i++) {
        if (list[i].id == id) {
           let deleted = list.splice(i, 1);
           saveListToFile();
           return deleted;
        }
    }
    return "id not found"
   }

   function getOneTask(id) {
    let list = require("./list.json");
    let filtered = list.filter(e=>e.id == id);

    return filtered;
}