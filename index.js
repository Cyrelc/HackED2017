var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/welcome', function(req, res) {
    res.send('This is another page. And it worked!! Imagine that');
});

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});
