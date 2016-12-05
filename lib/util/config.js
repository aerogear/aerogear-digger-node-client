const Configstore = require('configstore');
const pkg = require('../../package.json');

const conf = new Configstore(pkg.name);
module.exports = conf;