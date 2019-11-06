const fs = require('fs')
const path = require('path')
const project = require('../project')

const { pages, dist } = project.paths
const pagesDirectory = path.join(__dirname, `../${pages}`)

module.exports = (grunt) => {
  fs.readdirSync(pagesDirectory).map((file) => `${dist}/${file}`)

  grunt.registerTask('minify:html', 'Minify HTML Files', () => {
    grunt.config.merge({
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true,
          },
          files: [{
            expand: true,
            src: ['dist/*.html'],
            dest: '',
          }],
        },
      },
    })

    grunt.loadNpmTasks('grunt-contrib-htmlmin')
    grunt.task.run('htmlmin')
  })
}
