var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra')),
    del = require('../lib/delFile');

var files = ['/src'];

function  srcWithout(project) {
    return Promise.all([del(project, files)])
        .then(function () {
            return console.log('remove src success!');
        })
}

module.exports = srcWithout;
