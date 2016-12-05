const authHelper = require("../util/auth");
const Jenkins = require('jenkins');

/**
 *  Trigger jenkins build
 */
module.exports = (auth, jobName, callback) => {
  const options = authHelper.createJenkinsOptions(auth.url, auth.user, auth.password);
  const jenkins = Jenkins(options);
  jenkins.job.build(jobName, function(err, queueNumber) {
    callback(err, queueNumber);
  });
};



