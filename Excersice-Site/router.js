const userLogic = require('./BL/userLogic')
const exerciseLogic = require('./BL/exerciseLogic')
const languageLogic = require('./BL/languageLogic')
const generalLogic = require('./BL/generalLogic')

module.exports = (app) => {

    app.get('/users',async (req, res) => {
        let result
        try {
            result = await userLogic.read()
        } catch (error) {
            result = { 
                status : 400,
                error : error.message || error 
            }
        }
        res.send(result);
    })

    app.get('/languages',async (req, res) => {
        let result
        try {
            result = await languageLogic.read(req.body._id)
        } catch (error) {
            result = { 
                status : 400,
                error : error.message || error 
            }
        }
        res.send(result);
    })

    app.get('/languages/exercises/:_id',async (req, res) => {
        let result
        try {
            result = await exerciseLogic.readExercises(req.params._id)
        } catch (error) {
            result = { 
                status : 400,
                error : error.message || error 
            }
        }
        res.send(result);
    })

    app.get('/exercises/:_id?',async (req, res) => {
        let result
        try {
            result = await exerciseLogic.read(req.params._id)
        } catch (error) {
            result = { 
                status : 400,
                error : error.message || error 
            }
        }
        

        res.send(result);
    })

    
        app.post('/user', async (req, res) => {
            let result
            try {
                result = await userLogic.create(req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })

        app.post('/language', async (req, res) => {
            let result
            try {
                result = await languageLogic.create(req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })

        app.post('/exercise', async (req, res) => {
            let result
            try {
                result = await exerciseLogic.create(req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })
    
        app.put('/user', async (req, res) => {
            let result
            try {
                result = await userLogic.update(req.body._id,req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })

        app.put('/language', async (req, res) => {
            let result
            try {
                result = await languageLogic.update(req.body._id,req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })

        app.put('/exercise', async (req, res) => {
            let result
            try {
                result = await exerciseLogic.update(req.body._id , req.body)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
        })
      
    
        app.delete('/user/:_id', async(req, res) => {
            let result
            try {
                result = await userLogic.delete(req.params._id)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
         })

         app.delete('/language/:_id', async(req, res) => {
            let result
            try {
                result = await languageLogic.delete(req.params._id)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
         })

         app.delete('/exercise/:_id', async(req, res) => {
            let result
            try {
                result = await exerciseLogic.delete(req.params._id)
            } catch (error) {
                result = { 
                    status : 400,
                    error : error.message || error 
                }
            }
            res.send(result);
         })
    
         app.post('/user/login',async (req, res) => {
            let result
            try {
            result = await userLogic.login(req.body.email , req.body.password);
            } catch(error){
                result={
                    status: 400,
                    message: error.message || error
            }
        }
            res.send(result);
        })
    
        app.post('/user/register', async (req, res) => {
            let result;
            try {
                result = await userLogic.register(req.body)
            }catch (error) {
                result={
                    status: 400,
                    message: error.message || error
                }
            }
            res.send(result)
        })
    



        }

