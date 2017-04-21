#! /usr/bin/env node
var program = require('commander'),
    Promise = require("bluebird"),
    gs = require('../lib/generateStructure'),
    wf = require('../lib/withoutFile');


program
  .version(require('../package.json').version)
  .usage('[options] [project name]')
  .option('-W, --without <str | array>', 'generate project without some models(value can be `src`、`coffee`、`jade`)')
  .parse(process.argv);

var pname = program.args[0]

// 未输入名字，返回帮助信息
if(!pname) {
    program.help();
}

var outs = program.without ? program.without.split(',') : []

Promise.all([gs(pname)])
    .then(function(){
        return wf(pname, outs);
    });
