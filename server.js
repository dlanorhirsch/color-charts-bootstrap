const express = require('express');
const html = require('html');
const ejs = require('ejs');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
  })
);

var port = process.env.PORT || 8000;

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function() {
  console.log('App is running on http://localhost:' + port);
});

// res.sendFile(path.join(__dirname, '../public', 'index1.html'));