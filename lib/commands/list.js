var config = require('../templates');

function list() {
    console.log(config.tpl)
    process.exit()
}

module.exports = list;
