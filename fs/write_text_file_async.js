/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var data = "just think about it";

/**
 * fs.writefile(path, data, options, callback_)
 * path:�ļ�·��
 * data:����
 * options: �ļ����룬��ѡ
 * callback_:�ص�����, ֻ���ĳɹ����, ����ֻ����һ��err����
 */
fs.writeFile('output.txt',data, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("write successed !");
    }
});

