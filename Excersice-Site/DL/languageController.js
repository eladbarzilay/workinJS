require('./db')
const languagesModel = require('./models/languagesModel')

async function createMyLanguage(data){
    return await languagesModel.create(data)
}

async function getAllLanguages(){
    return await languagesModel.find();
}

async function updateLanguage(_id,newData){
    return await languagesModel.findByIdAndUpdate(_id,newData,{new:true , runValidators:true} );
}

async function removeLanguage(_id){
    return await languagesModel.findByIdAndRemove(_id);
}

module.exports = {
    read:getAllLanguages,
    create:createMyLanguage,
    update:updateLanguage,
    delete:removeLanguage,
}