var express = require('express');  
var morgan = require('morgan');

var app = express();

app.use(morgan('short'));

app.get('/', function (req, res) {  
  res.send('hello, world!');
});

app.listen(3000);  
console.log("Server running on port 3000");  