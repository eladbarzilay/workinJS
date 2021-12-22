const root = require('./root')

module.exports = (app) => {

    app.get('/root/folder/:folderName', (req, res) => {
        res.status(200).send(root.readFolder(req.params.folderName))
    })

    app.post('/root/file', (req, res) => {
        const fileName = req.body
        res.status(200).send(root.readFile(fileName.path))
    })
    
    app.post('/root/createFolder/:folderName', (req, res) => {
        res.status(201).send(root.createFolder(req.params.folderName))
    })

    app.post('/root/createFile/:fileName', (req, res) => {
        res.status(201).send(root.createFile(req.params.fileName,req.body))
    })

    app.put('/root/changeFileName', (req, res) => {
        const fileName = req.query.fileName;
        const newFileName = req.query.newFileName;
        res.status(200).send(root.updateFileName(fileName,newFileName))
    })

    app.put('/root/changeFileContent', (req, res) => {
        const content = req.body;
        res.status(200).send(root.updateFileContent(content.fileName,content.data))
    })

    app.delete('/root/deleteFile/:fileName', (req, res) => { 
        res.status(204).send(root.delete(req.params.fileName))
    })
}