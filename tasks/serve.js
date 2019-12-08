const project = require('../project')

const { dist } = project.paths

// Grunt code
module.exports = grunt => {
  grunt.registerTask('serve', 'Serve the project', () => {
    grunt.config.merge({
      serve: {
        options: {
          path: `/${dist}`,
          port: 9000,
        },
      },
    })

    // Run the server
    grunt.loadNpmTasks('grunt-serve')
    grunt.task.run('serve')
  })
}
