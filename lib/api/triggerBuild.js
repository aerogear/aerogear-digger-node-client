var fs = require("fs");
var path = require('path');
var _ = require('underscore');
var authHelper = require("../util/auth");

/**
 *  Trigger jenkins build
 */
module.exports = (auth, jobName, callback) => {
    var options = authHelper.createJenkinsOptions(auth.url, auth.user, auth.password);
    var jenkins = require('jenkins')(options);
    jenkins.job.build(jobName, function (err, queueNumber) {
        callback(err, queueNumber);
    });
}



