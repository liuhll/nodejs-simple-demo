var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
var routes = require('./routes')(app);
app.listen(8081);

console.log('Server running at http://%s:%s','localhost',8081)
