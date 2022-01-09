require('./db')
const userModel = require('./models/userModel')

async function createUser(data){
    return await userModel.create(data)
}

async function getAllUsers(filter={},projection){
    return await userModel.find(filter,projection);
}

async function updateUser(_id,newData){
    return await userModel.findByIdAndUpdate(_id,newData,{new:true , runValidators:true} );
}

async function removeUser(_id){
    return await userModel.findByIdAndRemove(_id);
}

module.exports = {
    read:getAllUsers,
    create:createUser,
    update:updateUser,
    delete:removeUser
}