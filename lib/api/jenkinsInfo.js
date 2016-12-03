var auth = require("../util/auth")

// Retrieve jenkins server information
module.exports = (auth, callback) => {
    var options = auth.createJenkinsOptions(auth.url, auth.user, auth.password);
    options.crumbIssuer = true;
    var jenkins = require('jenkins')(options);
    jenkins.info(function (err, data) {
        callback(err, data);
    });
}



