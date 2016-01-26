/**
 * Created by roach on 2016/1/25.
 * 同步读取二进制文件
 */
'use strict';

var fs = require('fs');

// sync read sample.gif

var data = fs.readFileSync('sample.gif');
console.log(data);
console.log(data.length + ' bytes');



