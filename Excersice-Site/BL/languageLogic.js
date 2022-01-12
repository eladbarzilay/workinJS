const languageController = require('../DL/languageController')


async function read(_id) {
    let filter =  _id ? { _id } : {}
    return languageController.read(filter)
}



module.exports = {...languageController,read}