const bcryptjs = require('bcryptjs');
const userController = require('../DL/userController')


async function create(newUser) {
    if(!newUser.email?.includes('@'))
    throw 'you forgot to put @';
    return userController.create(newUser);
}

async function update(data) {
    data.lastSeen = Date.now();
    return userController.update(data._id, data);
}

async function register(data) {
if(!data.firstName || !data.lastName)
    throw ' first name and last name are required'

    data.name = `${data.firstName} ${data.lastName}`;
    data.password = bcryptjs.hashSync(data.password);

    return create(data)
}

async function login(email,password){
    const user =(await userController.read({email},'+password'))[0];
    if(!user) 
    throw 'email or password invalid'
    
    if(!bcryptjs.compareSync(password, user.password))
    throw 'email or password invalid'

    return update(user)
}


module.exports = {...userController,create,update,register,login}
