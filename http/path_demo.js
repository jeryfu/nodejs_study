/**
 * Created by roach on 2016/1/25.
 */
'use strict'

var path = require('path');

// prase current dir
var workdir = path.resolve('.');
console.log('work dir : ' + workdir);

var filePath = path.join(workdir, 'pub', 'index.html');
console.log("file path: " + filePath);

console.log(process.argv[2]);