// Create jenkins job command
var conf = require("../../util/config");
var logger = require("../../util/logger");
var prompt = require('readline-sync');

var createJobApi = require("../../api/createJob");

exports.command = 'create <name> [repository] [branch]'
exports.aliases = ["new"];
exports.describe = 'Create jenkins job for git repository with Jenkinsfile'
exports.builder = (yargs) => {
    return yargs.count('verbose').alias('v', 'verbose');
}

exports.handler = (argv) => {
    if (!argv.repository) {
        argv.user = prompt.question('Git repository to use: ');
    }
    if (!argv.branch) {
        argv.password = prompt.question('Git branch to checkout: ');
    }
    createJobApi(conf.get("auth"), {
        name: argv.name,
        repository: argv.repository,
        branch: argv.branch
    }, function (err, data) {
        if (err) {
            logger.error(`Problem when creating ${argv.name} job`);
            if (argv.verbose) {
                logger.error(err);
            }
            return;
        }
            logger.info(`Job ${argv.name} created!`);
            if (argv.verbose) {
                logger.debug(data);
            }
    });
};

