// Login into jenkins command
var conf = require("../util/config");
var logger = require("../util/logger");
var prompt = require('readline-sync');

var streamLogs = require("../api/streamLogs");

exports.command = 'log <job> <queueid>'
exports.describe = 'Stream jenkins logs for triggered build'
exports.builder = (yargs) => {
    return yargs.count('verbose').alias('v', 'verbose');
}

exports.handler = (argv) => {
    if (!argv.job) {
        argv.job = prompt.question('Jenkins job name: ');
    }
    streamLogs(conf.get("auth"), argv.job, argv.queueid, console, function (err, data) {
        if (err) {
            logger.error(`Cannot fetch build log for ${argv.job}`);
            if (argv.verbose) {
                logger.error(err);
            }
            return;
        }
    });
};

