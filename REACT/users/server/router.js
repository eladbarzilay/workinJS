const  userLogic = require('./BL/userLogic')

module.exports = (app) => {

    app.get('/user',async (req, res) => {
        res.send(await userLogic.read());
    })

    
    app.post('/user',async (req, res) => {
        let result;
        try {
            result = await userLogic.create(req.body)
        }catch (err) {
            result={
                status: 400,
                message: err.message || err
            }
        }
        res.send(result)
    })
    
    app.get('/user/login',async (req, res) => {
        let result
        try {
        const {query} = req;
        result = await userLogic.login(query.email , query.password);
        } catch(err){
            result={
                status: 400,
                message: err.message || err
        }
    }
        res.send(result);
    })

    app.post('/user/register', async (req, res) => {
        let result;
        try {
            result = await userLogic.register(req.body)
        }catch (err) {
            result={
                status: 400,
                message: err.message || err
            }
        }
        res.send(result)
    })

    app.put('/user',async (req, res) => {
        res.send(await userLogic.update(req.body))
    })

    // app.delete('/', (req, res) => { })
}