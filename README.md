# koa-req-trace

koa请求日志打印

## Installation

```bash
$ npm install koa-req-trace
```

## API

```js
var koa = require('koa');
var app = koa();
app.use(require('koa-req-trace')(options));
```


### Options

 - `console` {boolean} 打印到控制台， 默认true
 - `appendFile` {boolean} 输出到文件，默认true
 - `dist` {string} 文件路径，默认'./log.txt'


## Example


```js

var app = require('koa')();
var koaReqTrace = require('koa-req-trace');
app.use(koaReqTrace({
    console: false,
    appendFile: true,
    dist: path.join(__dirname, "logger.txt")
}));

```

## Support

 * mail - 340443366@qq.com


## License

  MIT

