// Build jenkins job command
const conf = require("../../util/config");
const logger = require("../../util/logger");
const prompt = require('readline-sync');
const triggerBuild = require("../../api/triggerBuild");

exports.command = 'build <job>';
exports.describe = 'Trigger build for Jenkins job';
exports.builder = yargs =>
   yargs.count('verbose').alias('v', 'verbose')
;

exports.handler = argv => {
  if (!argv.job) {
    argv.job = prompt.question('Jenkins job name: ');
  }
  triggerBuild(conf.get("auth"), argv.job, function(err, queueNumber) {
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