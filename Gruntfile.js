/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    eslint: {
      src: [ 'lib/**/*.js', 'bin/*.js'],
    },
  });
  grunt.loadNpmTasks("gruntify-eslint");

  // Default task.
  grunt.registerTask('default', ['eslint']);
};
