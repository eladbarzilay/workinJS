require('./db')
const exerciseModel = require('./models/exerciseModel')

async function createMyExercise(data){
    return await exerciseModel.create(data)
}

async function getAllExercises(){
    return  await exerciseModel.find();
}

async function updateExercise(_id,newData){
    return await exerciseModel.findByIdAndUpdate(_id,newData,{new:true , runValidators:true} )
}

async function removeExercise(_id){
    return await exerciseModel.findByIdAndUpdate(_id,{status:"deleted"},{new:true});
}

module.exports = {
    read:getAllExercises,
    create:createMyExercise,
    update:updateExercise,
    delete:removeExercise,
}