const project = require('../project')

const { stylesheets } = project

// Grunt code
module.exports = (grunt) => {
  grunt.registerTask('build:sass', 'Pre-process Sass with Babel', () => {
    grunt.config.merge({
      sass: {
        dist: {
          files: { ...stylesheets },
        },
      },
    })

    // Process CSS
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.task.run('sass')
  })
}
