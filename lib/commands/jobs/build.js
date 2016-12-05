// Build jenkins job command
var conf = require("../../util/config");
var logger = require("../../util/logger");
var prompt = require('readline-sync');

var triggerBuild = require("../../api/triggerBuild");

exports.command = 'build <job>'
exports.describe = 'Trigger build for Jenkins job'
exports.builder = (yargs) => {
    return yargs.count('verbose').alias('v', 'verbose');
}

exports.handler = (argv) => {
    if (!argv.job) {
        argv.job = prompt.question('Jenkins job name: ');
    }
    triggerBuild(conf.get("auth"), argv.job, function (err, queueNumber) {
        if (err) {
            logger.error(`Problem when triggering new build for ${argv.job} job`);
            if (argv.v) {
                logger.error(err);
            }
            return;
        }
        logger.info(`Build for job ${argv.job} started! Use "log ${argv.job} ${queueNumber}" command to fetch logs`);
    });
};