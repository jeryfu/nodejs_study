/**
 * Created by roach on 2016/1/26.
 * buffer 缓冲区
 */
'use strict';

// 创建一个长度为10字节的buffer
var buf1 = new Buffer(10);
console.log('buf1 length: ' + buf1.length);

var buf2 = new Buffer([10, 20, 30, 40, 50]);
console.log('buf2 length: ' + buf2.length);

var buf3 = new Buffer("create buffer", 'utf-8');
console.log('buf3 length: ' + buf3.length);



/**
 * 写入缓冲区
 */
var buf = new Buffer(10);
var len = buf.write('buffer demo', 0, 6, 'utf-8');
// 6, buffer
console.log('buf len: ' + len + ', buf=' + buf.toString());

/**
 * 读取缓冲区的数据
 */

var bufs = new Buffer(26);
for(var i = 0; i < 26; i++){
    bufs[i] = i + 97;
}
console.log('buf: ' + bufs.toString('utf-8', 0, 3));
console.log('buf: ' + bufs.toString());


/**
 * 转换为json
 */
var jbuf = new Buffer("Roach");
var json = jbuf.toJSON(jbuf);
console.log("buf to json: " + json);


/**
 * 缓冲区合并
 */
var c_buf_1 = new Buffer('Hello NodeJs !');
var c_buf_2 = new Buffer('this is buffer');
var c_buf_3 = Buffer.concat([c_buf_1, c_buf_2]);
console.log('c_buf_3: ' + c_buf_3.toString());