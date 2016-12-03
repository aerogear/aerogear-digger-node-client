var fs = require("fs");
var path = require('path');
var _ = require('underscore');

/**
 *  Create jenkins job
 * */
module.exports = (auth, jobArgs, callback) => {
    var options = require("../util/auth").createJenkinsOptions(auth.url, auth.user, auth.password);
    var jenkins = require('jenkins')(options);
    var fileLocation = path.join(__dirname, ' ..', '..', 'templates', 'standard.xml');
    var fileContent = fs.readFileSync(fileLocation,'utf8');
    if (fileContent) {
        var jobTemplate = _.template(fileContent);
        jobXML = jobTemplate(jobArgs);
        var options = {
            name: jobArgs.name,
            xml: jobXML
        }
        jenkins.job.create(options, function (err, data) {
            callback(err, data);
        });
    }

}



