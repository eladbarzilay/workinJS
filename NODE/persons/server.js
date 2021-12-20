const express = require("express");
const app = express();
let createPerson = require('./persons.js')
let validate = require('./validate.js')
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());


let p1 = createPerson("elad","barzilay",29,"holon","brown")
let persons = [p1];


app.get ("/person", function (req, res){
    res.send(persons)
    
});
app.get ("/person/search", function (req, res){
    let filtered = persons.filter(e=>e.firstName.includes(req.query.str));
    res.send(filtered)  
});

app.post("/person",function (req, res){
   let body = req.body;
    let p = createPerson(body.firstName,body.lastName,body.age,body.city,body.eyeColor);
    if(p!=false) {
        persons.push(p);
        res.send(p);
    }
    res.send("wrong details");
})

app.put("/person",function (req, res){
    let body = req.body;
    let pToUpdate = persons.find(e=>Number(e.id) == Number(body.id));
    pToUpdate.firstName = validate(body.firstName)==true?body.firstName:pToUpdate.firstName;
    pToUpdate.lastName = validate(body.lastName)==true?body.lastName:pToUpdate.lastName;
    pToUpdate.age = validate(body.age)==true?body.age:pToUpdate.age;
    pToUpdate.city = validate(body.city)==true?body.city:pToUpdate.city;
    pToUpdate.eyeColor = validate(body.eyeColor)==true?body.eyeColor:pToUpdate.eyeColor;
    res.send(pToUpdate);
})

app.delete("/person/:id",function (req, res){
    const idToDelete = req.params.id;
    let count = 1;
    for( i of persons) {
        if (Number(idToDelete)==i.id) {
            persons.splice(count-1,1);
            return res.send("deleted") 
        }else{
            count++;
        }
    };
    res.send("something went wrong")
})

app.listen(3000, () => console.log("server is running"));