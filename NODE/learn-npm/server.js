const express = require("express");
const app = express();
const calc = require("../calc");
const bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded()); 
app.use(express.static('public'))

// app.get('/calc', (req, res) => {
//     const query = req.query;
//     let action = req.params.action;
//     res.send(`${query.num} ${query.num1} ${calc[query.action](Number(query.num),Number(query.num1))}`);
//   });

  app.get('/calc/:action', (req, res) => {
    const query = req.query;
    const action = req.params.action;
    res.send(`${query.num} ${query.num1} ${calc[action](Number(query.num),Number(query.num1))}`);
  });


app.get("/", function (req, res) {
  res.send("hello from express");
});

app.get("/hello", function (req, res) {
  const query = req.query;
  res.send(`hello ${query.name} ${query.lname}`);
});

// app.get("/calc", function (req, res) {
//   const query = req.query;

//   res.send(`${query.num} ${query.num1} ${calc[query.action](Number(query.num),Number(query.num1))}`);
// });

app.post("/calc/:action", function (req, res) {
const body = req.body;
const action = req.params.action;
req.body = calc[action](Number(body.num),Number(body.num1));
res.send(`${calc[action](Number(body.num),Number(body.num1))}`);
});

app.listen(3000, () => console.log("server is running"));
