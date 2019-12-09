const project = require('../project')

const { scripts, stylesheets } = project

// Grunt code
module.exports = grunt => {
  grunt.registerTask('watch:src', 'Serve the project', () => {
    grunt.config.merge({
      watch: {
        options: {
          livereload: true,
        },
        css: {
          files: Object.values(stylesheets),
          tasks: ['build:css'],
        },
        js: {
          files: Object.values(scripts),
          tasks: ['build:js'],
        },
      },
    })

    // Process CSS
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.task.run('watch')
  })
}
