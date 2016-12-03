var fs = require("fs");
var path = require('path');
var _ = require('underscore');
var authHelper = require("../util/auth");

/**
 *  Stream jenkins logs
 */
module.exports = (auth, jobName, queueNumber,writter, callback) => {
    var options = authHelper.createJenkinsOptions(auth.url, auth.user, auth.password);
    var jenkins = require('jenkins')(options);
    jenkins.queue.item(queueNumber, function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        if (!data.executable || !data.executable.number) {
            return writter.log("Build did not started yet! Try again later");
        }
        var buildNo = data.executable.number;

        const logStream = jenkins.build.logStream(jobName, buildNo);
        writter.log(`## Starting streaming build ${buildNo} log`);
        logStream.on('data', function (text) {
            writter.log(text);
        });
        logStream.on('error', function (err) {
            writter.error(err);
        });

        logStream.on('end', function () {
            writter.log('Build finished'.gray);
            callback(err, data);
        });
    });
}



