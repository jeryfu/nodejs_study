/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

/**
 * data事件表示流的数据已经可以读取了，
 * end事件表示这个流已经到末尾了，没有数据可以读取了，
 * error事件表示出错了。
 */
 rs.on('data', function(chunk){
     console.log('DATA: ');
     console.log(chunk);
 });

rs.on('end', function(){
    console.log('End');
});

rs.on('error', function(err){
    console.log("error: " + err);
});