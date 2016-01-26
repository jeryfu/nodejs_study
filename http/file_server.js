/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var
    fs = require('fs'),
    http = require('http'),
    path = require('path'),
    url = require('url');

// 获取当前目录
var root = path.resolve(process.argv[2] || '.');
console.log('static root dir: ' + root);

var server = http.createServer(function (request, response) {

    //  获取 pathname: '/static/css/base.css',
    var pathname = url.parse(request.url).pathname;

    // 获取本地文件的路径
    var filepath = path.join(root, pathname);

    // 获取文件状态
    fs.stat(filepath, function(err, stats){
        if(!err){
            if(!stats.isFile()){
                filepath = path.join(filepath, 'index.html');
            }

            console.log('200, ' + request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log("404, " + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

//在node服务中输入： node file_server.js static