const project = require('../project')

const { source } = project.paths

// Grunt code
module.exports = grunt => {
  grunt.registerTask('watch:src', 'Serve the project', () => {
    grunt.config.merge({
      watch: {
        configFiles: {
          files: `${source}/**`,
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
