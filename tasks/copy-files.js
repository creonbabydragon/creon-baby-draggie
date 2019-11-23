const shell = require('shelljs')

const project = require('../project')
const convertObjectToArray = require('./lib/convertObjectToArray')
const getDirectoryFromPath = require('./lib/getDirectoryFromPath')

const { staticContent } = project
const { dist } = project.paths

module.exports = grunt => {
  function copyFile(path) {
    const [distPath, srcPath] = [path.key, path.value]

    if (grunt.file.exists(srcPath)) {
      const distDirectory = getDirectoryFromPath(distPath)
      if (!grunt.file.exists(distDirectory)) shell.mkdir('-p', distDirectory)
      shell.cp('-r', srcPath, dist)
    }
  }

  grunt.registerTask('copy:files', `Copy files to ${dist}`, () => {
    const content = convertObjectToArray(staticContent)
    content.forEach(copyFile)
  })
}
