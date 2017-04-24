var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra')),
    config = require('../templates');

function del(project, files) {

    // 写入template.json
    fs.writeFile(__dirname + '/../templates.json', JSON.stringify(config), 'utf-8', function(err) {
        if(err) {console.log(err)}
        console.log(chalk.green('Template deleted!'))
        console.log(chalk.grey('The last template list is: \n'))
        console.log(config)
        console.log('\n')
        process.exit()
    });


    return files.map(function(item) {
        return fs.removeAsync(project + item);
    });
}

function delFile(project, files) {
    return Promise.all([del(project, files)]);
}

module.exports = delFile;
