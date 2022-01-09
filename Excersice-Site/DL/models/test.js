require('../db')
// const exerciseModel = require('./exerciseModel')
// const languagesModel = require('./languagesModel')
// const userModel = require('./userModel')


// const exerciseTemplate = 
// {
//     title:"hello",
//     description:"hi",
//     icon:"", 
//     status: 'draft',
//     // creator:"",
//     // createDate:"",
//     exerciseType:"short",
//     difficulty:"easy",
//     tags:['loops','functions'],
//     programLanguage: "61d5d2e92069457f459e3cc8",
//     developingTime:"",
//     content:{
//        content:"stam",
//        sources:[{
//            name:"link1",
//            url:"https://google.com",  
//            }]
//     },
//     solution:"my solution",
// }

// const userTemplate = {
//     userName:"elad",
//     password: "elad",
//     permit:"admin",
//     email:"elad@gmail.com",
//     profilPicture: "",
// }

// const languageTemplate = {
//     language:"java script",
//     tags:["js","react"],
//     icon: "",
// }


// async function createMyExercise(data){
//     return await exerciseModel.create(data)
// }

// async function createMyLanguage(data){
//     return await languagesModel.create(data)
// }

// async function createUser(data){
//     return await userModel.create(data)
// }

// async function getAllExercises(){
//     const exercises =  await exerciseModel.find();
//     console.log(exercises);
//     return  exercises;
// }

// async function getAllLanguages(){
//     const languages =  await languagesModel.find();
//     console.log(languages);
//     return languages;
// }

// async function getAllUsers(){
//     const users = await userModel.find();
//     console.log(users);
//     return users;
// }

// async function updateExercise(_id,newData){
//     const toUpdate = await exerciseModel.findByIdAndUpdate(_id,newData);
//     console.log(toUpdate);
//     return toUpdate;
// }

// async function updateLanguage(_id,newData){
//     const toUpdate = await languagesModel.findByIdAndUpdate(_id,newData);
//     console.log(toUpdate);
//     return toUpdate;
// }

// async function updateUser(_id,newData){
//     const toUpdate = await userModel.findByIdAndUpdate(_id,newData);
//     console.log(toUpdate);
//     return toUpdate;
// }

// async function removeExercise(_id){
//     return await exerciseModel.findByIdAndRemove(_id);
// }

// async function removeLanguage(_id){
//     return await languagesModel.findByIdAndRemove(_id);
// }

// async function removeUser(_id){
//     return await userModel.findByIdAndRemove(_id);
// }



// createMyExercise(exerciseTemplate)
// createMyLanguage(languageTemplate)
// createUser(userTemplate)

// getAllExercises();
// getAllLanguages();
// getAllUsers();

// updateExercise("61d5d335b6eb487eefe64a6f",{"title":"calc"})
// updateLanguage("61d5d2e92069457f459e3cc8",{"language":"c#"})
// updateUser("61d5d335b6eb487eefe64a72",{"userName":"leon"})

// removeExercise("61d5a36353d1db7913d7d68a")
// removeLanguage("61d5d2e92069457f459e3cc8")
// removeUser("61d5d335b6eb487eefe64a72")