/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var wss = fs.createWriteStream('output_string.txt', 'utf-8');
wss.write('ʹ��stream д���ı�����. . .')
wss.write('End');
wss.end();

var wsb = fs.createWriteStream('output_byte.txt', 'utf-8');
wsb.write(new Buffer('ʹ��streamд�����������. . . ','utf-8'));
wsb.write(new Buffer('End', 'utf-8'));
wsb.end();
