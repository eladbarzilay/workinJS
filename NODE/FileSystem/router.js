const list = require('./list');

module.exports = (app) => {

    app.get('/list', (req, res) => {
        res.send(list.readList(req.query));
        
    })
    app.get('/list/:id', (req, res) => {
        res.send(list.getOneTask(req.params.id));
        
    })


    app.post('/list', (req, res) =>{
      res.send(list.create(req.body));  
    })

    app.put('/list/:id', (req, res) =>{
        let {params} = req ;
        res.send(list.update( params.id));

    })

    app.delete('/list/:id', (req, res) =>{
            let {params} = req ;
            res.send(list.del(params.id));

    })
}