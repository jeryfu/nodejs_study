/**
 * Created by roach on 2016/1/25.
 * ��ȡ�������ļ�
 */
'use strict';

var fs = require('fs');

var data = fs.readFileSync('sample.txt');

console.log(data);
console.log(data.length + ' bytes');
console.log('First three bytes: ' + data[0] + ',' + data[1] + ',' + data[2] );



