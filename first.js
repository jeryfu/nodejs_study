/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var s = "Hello";

function greet(name){
    console.log(s + ", " + name + "!");
};

var add = function(a, b){
    console.log("the result is : " + (a + b));
}

/*module.exports = {
    greet:greet,
    add:add
}*/

exports.greet = greet;
exports.add = add;