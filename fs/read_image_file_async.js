/**
 * Created by roach on 2016/1/25.
 * 异步读取二进制文件
 */
'use strict';

var fs = require('fs');

// async read sample.gif

console.log('>>>> BEGIN >>>')

fs.readFile('sample.gif', function(err, data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + ' bytes');
    }
});

console.log('>>>> END >>>')