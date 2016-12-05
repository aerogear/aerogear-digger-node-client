const winston = require('winston');
winston.addColors({
  trace: 'magenta',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  debug: 'blue',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  error: 'red'
});
winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {colorize: true});
winston.level = 'debug';

module.exports = winston;