const project = require('../project')

const { scripts } = project

// Grunt code
module.exports = (grunt) => {
  grunt.registerTask('build:js', 'Transpile JS with Babel/Babelify', () => {
    // Use babel with babelify/grunt-browserify to transpile JavaScript
    grunt.config.merge({
      browserify: {
        options: {
          sourceMap: true,
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: {
            debug: true,
          },
        },
        dist: {
          files: { ...scripts },
        },
      },
    })

    // Process CSS
    grunt.loadNpmTasks('grunt-browserify')
    grunt.task.run('browserify')
  })
}
