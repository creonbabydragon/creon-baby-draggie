const project = require('../project')

const { scripts, stylesheets } = project

// Grunt code
module.exports = grunt => {
  grunt.registerTask('watch:src', 'Serve the project', () => {
    grunt.config.merge({
      watch: {
        configFiles: {
          files: [
            ...Object.values(stylesheets),
            ...Object.values(scripts),
          ],
          tasks: ['build'],
          options: {
            livereload: true,
          },
        },
      },
    })

    // Process CSS
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.task.run('watch')
  })
}
