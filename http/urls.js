/**
 * Created by roach on 2016/1/25.
 */
'use strict';

var url = require('url');

// parse url:
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// parse incomplete url:
console.log(url.parse('/static/js/jquery.js?name=Hello world'));

console.log(url.format({
    protocol: 'http',
    hostname: 'localhost',
    pathname: '/static/js',
    port: '8080',
    query: {
        name: 'NodeJs',
        version: 'v1.0'
    }
}));