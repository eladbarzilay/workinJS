// const list = require('./list');
const Task = require("./controllers/TaskController");
module.exports = (app) => {
  app.get("/todo", async (req, res) => {
    try {
      let result = Task.read();
      res.send(await result);
    } catch (err) {
      res.send({ code: 400, message: err.message || err });
    }
  });
  // app.get("/todo/:id", (req, res) => {
  //   res.send(Task.getOneTask(req.params.id));
  // });

  app.post("/todo", async (req, res) => {
    try {
      console.log(req.body);
      let result = await Task.create(req.body);
      res.send(result);
    } catch (err) {
      res.send({ code: 400, message: err.message || err });
    }
  });

  app.put("/todo/:id", async (req, res) => {
    let { params } = req;
    let result = await Task.update(params.id,req.body)
    console.log(result)
    res.send(result);
  });

  app.delete("/todo/:id",async (req, res) => {
    let { params } = req;
    res.send(await Task.delete(params.id));
  });
};
