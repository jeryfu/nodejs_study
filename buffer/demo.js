/**
 * Created by roach on 2016/1/26.
 * buffer ������
 */
'use strict';

// ����һ������Ϊ10�ֽڵ�buffer
var buf1 = new Buffer(10);
console.log('buf1 length: ' + buf1.length);

var buf2 = new Buffer([10, 20, 30, 40, 50]);
console.log('buf2 length: ' + buf2.length);

var buf3 = new Buffer("create buffer", 'utf-8');
console.log('buf3 length: ' + buf3.length);



/**
 * д�뻺����
 */
var buf = new Buffer(10);
var len = buf.write('buffer demo', 0, 6, 'utf-8');
// 6, buffer
console.log('buf len: ' + len + ', buf=' + buf.toString());

/**
 * ��ȡ������������
 */

var bufs = new Buffer(26);
for(var i = 0; i < 26; i++){
    bufs[i] = i + 97;
}
console.log('buf: ' + bufs.toString('utf-8', 0, 3));
console.log('buf: ' + bufs.toString());


/**
 * ת��Ϊjson
 */
var jbuf = new Buffer("Roach");
var json = jbuf.toJSON(jbuf);
console.log("buf to json: " + json);


/**
 * �������ϲ�
 */
var c_buf_1 = new Buffer('Hello NodeJs !');
var c_buf_2 = new Buffer('this is buffer');
var c_buf_3 = Buffer.concat([c_buf_1, c_buf_2]);
console.log('c_buf_3: ' + c_buf_3.toString());