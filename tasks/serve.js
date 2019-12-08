const project = require('../project')

const { dist } = project.paths

// Grunt code
module.exports = grunt => {
  grunt.registerTask('serve', 'Serve the project', () => {
    grunt.config.merge({})
  })
}
