exports.command = 'job <command>'
exports.desc = 'Manage jenkins jobs'
exports.builder = function (yargs) {
  return yargs.commandDir('jobs')
}
exports.handler = function (argv) {
}