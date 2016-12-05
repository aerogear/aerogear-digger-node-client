// Login into jenkins command
const conf = require("../util/config");
const logger = require("../util/logger");
const prompt = require('readline-sync');

const infoApi = require("../api/jenkinsInfo");

exports.command = 'login <url> [user] [password]';
exports.aliases = ["setup", "init"];
exports.describe = 'Setup jenkins credentials and login into jenkins';
exports.builder = yargs =>
   yargs.count('verbose').alias('v', 'verbose')
;
exports.handler = argv => {
  if (!argv.user) {
    argv.user = prompt.question('Username: ');
  }
  if (!argv.password) {
    argv.password = prompt.question('Password: ',{ hideEchoBack: true});
  }
  const auth = {
    url: argv.url,
    user: argv.user,
    password: argv.password
  };
  infoApi(auth, function(err, data) {
    if (err) {
      logger.info("Cannot connect to jenkins instance", err);
      return;
    }
    if (data) {
      logger.info("Login succesfull! Connected to jenkins!");
      conf.set("auth", auth);
      if (argv.verbose) {
        logger.debug(JSON.stringify(data, null, 4));
      }
    }
  });
};

