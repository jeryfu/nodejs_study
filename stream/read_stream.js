/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var rs = fs.createReadStream('sample.txt','utf-8');

/**
 * data�¼���ʾ���������Ѿ����Զ�ȡ�ˣ�
 * end�¼���ʾ������Ѿ���ĩβ�ˣ�û�����ݿ��Զ�ȡ�ˣ�
 * error�¼���ʾ�����ˡ�
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