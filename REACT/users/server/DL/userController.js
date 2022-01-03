require('./db')
const userModel = require('./userModel');


async function create(newUser) {
    return await userModel.create(newUser);
}

async function read(filter={},projection) {
    return await userModel.find(filter,projection);
}

async function update(_id, newData) {
    return await userModel.findByIdAndUpdate(
        _id, newData,
        {new:true , runValidators:true} 
        );
}

async function remove(_id) {
    return await userModel.findByIdAndRemove(_id);
}

module.exports = {
    read,
    create,
    update,
    delete: remove
}
