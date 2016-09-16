# Express的方法
## all方法
- `all方法`表示，**所有请求都必须通过该中间件**
  - 参数中的`*`表示对所有路径有效

## HTTP动词方法
- `Express`提供`get`、`post`、`put`、`delete`方法，即`HTTP动词`都是Express的方法

## 模式匹配
```javascript
app.get("/hello/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
});

//在模式参数后面加上问号，表示该参数可选
app.get('/hello/:who?',function(req,res) {
	if(req.params.id) {
    	res.end("Hello, " + req.params.who + ".");
	}
    else {
    	res.send("Hello, Guest.");
	}
});

app.get('/forum/:fid/thread/:tid', middleware)

// 匹配/commits/71dbb9c
// 或/commits/71dbb9c..4c084f9这样的git格式的网址
app.get(/^\/commits\/(\w+)(?:\.\.(\w+))?$/, function(req, res){
  var from = req.params[0];
  var to = req.params[1] || 'HEAD';
  res.send('commit range ' + from + '..' + to);
});
```

## set方法
- set方法用于指定变量的值
```javascript
//使用set方法，为系统变量“views”和“view engine”指定值
app.set("views", __dirname + "/views");
app.set("view engine", "jade");
```

## response对象
### response.redirect方法
- `response.redirect`方法允许网址的重定向

### response.sendFile方法
- response.sendFile方法用于发送文件

### response.render方法
- response.render方法用于渲染网页模板

```javascript
//使用render方法，将message变量传入index模板，渲染成HTML网页
app.get("/", function(request, response) {
  response.render("index", { message: "Hello World" });
});
```

## requst对象
### request.ip
- `request.ip`属性用于获得**HTTP请求**的`IP`地址

### request.files
- `request.files`用于**获取上传的文件**

