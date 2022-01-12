const exerciseController = require('../DL/exerciseController')


async function read(_id) {
    let filter =  _id ? { _id } : {}
    return exerciseController.read(filter)
}

async function readExercises(programLanguage) {
    let filter =  programLanguage ? { programLanguage } : {}
    return exerciseController.read(filter)
}





module.exports = {...exerciseController,read,readExercises}