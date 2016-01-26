/**
 * Created by roach on 2016/1/25.
 */
'use strict';

// current javasript file:
console.log('current js file: ' + __filename);

// current javasrcipt file dir:
console.log('current js dir: ' + __dirname );

process.name = 'Sample Nodejs';

console.log('arguments: ' + JSON.stringify(process.argv));

// current work dir : 返回当前的工作目录
console.log('current work dir: ' + process.cwd());

process.nextTick(function(){
    console.log('nextTick callback!');
});
console.log('nextTick was set !');


process.on('exit', function(code){
    console.log('about to exit with code: ' + code);
});