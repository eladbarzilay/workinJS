const bcryptjs = require('bcryptjs');
const userController = require('../DL/userController')

async function create(newUser) {
    if(!newUser.email?.includes('@'))
    throw 'you forgot to put @';
    return userController.create(newUser);
}

async function register(data) {
    if(!data.userName)
        throw ' user name is required'
    
        if(!data.email?.includes('@'))
        throw 'you forgot to put @';

        data.password = bcryptjs.hashSync(data.password);
    
        return  userController.create(data)
    }
    
    async function login(email,password){

        const user =(await userController.read({email},'+password'))[0];

        if(!user) 
        throw 'email or password invalid'
        console.log(user);
        if(!bcryptjs.compareSync(password, user.password))
        throw 'email or password invalid'
        return userController.update(user)
    }



module.exports = {...userController,create,register,login}