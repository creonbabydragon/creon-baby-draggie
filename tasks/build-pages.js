/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const fs = require('fs')
const path = require('path')
const project = require('../project')

const { dist, pages } = project.paths
const pagesDirectory = path.join(__dirname, `../${pages}`)


// Grunt code
module.exports = (grunt) => {
  grunt.registerTask('build:pages', 'Build pages', () => {
    fs.readdirSync(pagesDirectory).forEach((file) => {
      const Page = require(`../${pages}/${file}`)
      const Component = new Page()

      const { fileName, render } = Component

      if (!fileName) throw new Error(`Component ${file} is missing a fileName property`)
      if (!render) throw new Error(`Component ${file} is missing a render method`)

      const outputPath = `${dist}/${fileName}`

      const success = grunt.file.write(outputPath, Component.render())
      console.log(success
        ? `successfully built ${outputPath}`
        : `could not build ${outputPath}`)
    })
  })
}
