const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.listen(port, () => {

  console.log('Server Started');

})

app.get('/', (req, res) => {

  res.sendFile(__dirname + '/index.html');

});

app.post('/courses', (req, res) => {

  console.log(req.body);

});

const mongoose = require("mongoose");

const url = 'mongodb://127.0.0.1:27017';

mongoose.connect("mongodb://localhost:27017/HelloCrudDatabase",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});