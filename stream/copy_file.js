/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var crs = fs.createReadStream('sample.txt', 'utf-8');
var cws = fs.createWriteStream('copied.txt', 'utf-8');

crs.pipe(cws);