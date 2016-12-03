const Configstore = require('configstore');
const pkg = require('../../package.json');

const conf = new Configstore(pkg.name);
var logger = require("./logger");
module.exports = conf;