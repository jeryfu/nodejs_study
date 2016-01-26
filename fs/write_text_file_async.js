/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var fs = require('fs');

var data = "just think about it";

/**
 * fs.writefile(path, data, options, callback_)
 * path:文件路径
 * data:数据
 * options: 文件编码，可选
 * callback_:回调函数, 只关心成功与否, 所以只返回一个err参数
 */
fs.writeFile('output.txt',data, function(err){
    if(err){
        console.log(err);
    }else{
        console.log("write successed !");
    }
});

