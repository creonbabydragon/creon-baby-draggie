const shell = require('shelljs')

const project = require('../project')
const getDirectoryFromPath = require('./lib/getDirectoryFromPath')

const { staticContent } = project
const { dist } = project.paths

module.exports = grunt => {
  function copyFile([distPath, srcPath]) {
    if (grunt.file.exists(srcPath)) {
      const distDirectory = getDirectoryFromPath(distPath)
      if (!grunt.file.exists(distDirectory)) shell.mkdir('-p', distDirectory)
      shell.cp('-r', srcPath, dist)
    }
  }

  grunt.registerTask('copy:files', `Copy files to ${dist}`, () => {
    const content = Object.entries(staticContent)
    content.forEach(copyFile)
  })
}
