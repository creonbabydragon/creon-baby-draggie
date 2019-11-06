const shell = require('shelljs')

const project = require('../project')

const { dist } = project.paths

module.exports = (grunt) => {
  grunt.registerTask('clean', `Remove the ${dist} folder`, () => {
    shell.rm('-rf', dist)
  })
}
