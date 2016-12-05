const authUtil = require("../util/auth");
const Jenkins = require('jenkins');

/**
 *  Retrieve jenkins server information
 */
module.exports = (auth, callback) => {
  var options = authUtil.createJenkinsOptions(auth.url, auth.user, auth.password);
  options.crumbIssuer = true;
  var jenkins = Jenkins(options);
  jenkins.info(function(err, data) {
    callback(err, data);
  });
};



