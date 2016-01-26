/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var wss = fs.createWriteStream('output_string.txt', 'utf-8');
wss.write('使用stream 写入文本数据. . .')
wss.write('End');
wss.end();

var wsb = fs.createWriteStream('output_byte.txt', 'utf-8');
wsb.write(new Buffer('使用stream写入二进制数据. . . ','utf-8'));
wsb.write(new Buffer('End', 'utf-8'));
wsb.end();
