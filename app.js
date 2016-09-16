var path = require('path');
var favicon = require('serve-favicon');
var express = require('express');
var app = express();

app.set('port',process.env.PORT || 8081);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','jade');

app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

//设定静态文件目录，比如本地文件
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'));
