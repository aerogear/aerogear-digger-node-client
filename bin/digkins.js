var yargonaut = require('yargonaut')
  .style('red')
  .helpStyle('green')
  .errorsStyle('red')
var yargs = require('yargs');

yargs.commandDir("../lib/commands")
    .help('help')
    .alias('h', 'help')
    .strict(true)
    .demand(1)
    .version()
    .completion()
    .argv