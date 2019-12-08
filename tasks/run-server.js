const project = require('../project')

const { dist } = project.paths

// Grunt code
module.exports = grunt => {
  grunt.registerTask('serve:dist', 'Serve the project', () => {
    grunt.config.merge({
      connect: {
        server: {
          options: {
            base: dist,
            keepalive: true,
            livereload: true,
            port: 9000,
          },
        },
      },
    })

    // Process CSS
    grunt.loadNpmTasks('grunt-contrib-connect')
    grunt.task.run('connect')
  })
}
