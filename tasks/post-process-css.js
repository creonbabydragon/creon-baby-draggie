const autoprefixer = require('autoprefixer')() // add vendor prefixes
const cssnano      = require('cssnano')()      // minify CSS
const pixrem       = require('pixrem')()       // px fallbacks for rem values

const project = require('../project')

const postProcessors = [pixrem, autoprefixer, cssnano]
const { stylesheets } = project

module.exports = (grunt) => {
  grunt.registerTask('postprocess:css', 'Process CSS with Stylus and PostCSS', () => {
    grunt.config.merge({
      postcss: {
        options: {
          processors: [...postProcessors],
        },
        dist: {
          src: Object.keys(stylesheets),
        },
      },
    })

    grunt.loadNpmTasks('grunt-postcss')
    grunt.task.run('postcss')
  })
}
