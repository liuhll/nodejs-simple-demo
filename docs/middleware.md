# 中间件
- `中间件(middleware)`就是处理`HTTP请求`的**函数**
- **最大的特点:**一个中间件处理完，再传递给下一个中间件
- `App实例`在运行过程中，**会调用一系列的中间件**
## 中间件的参数
- `request`对象（代表HTTP请求）
- `response`对象（代表HTTP回应）
- `next`回调函数（代表下一个中间件)

> 每个中间件都可以对HTTP请求（`request对象`）进行加工，并且决定是否调用next方法，将`request对象`再传给下一个中间件

```javascript
function uselessMiddleware(req, res, next) {
  next();
}
```
## use方法
- `use`是`express`**注册中间件的方法**，它**返回一个函数**

