// build:js        × tasks/process-javascript.js
// build:pages     × tasks/build-pages.js
// build:sass      × tasks/process-sass.js
// copy:files      × tasks/copy-files.js
// minify:html     × tasks/minify-html.js
// postprocess:css × tasks/post-process-css.js

module.exports = grunt => {
  grunt.loadTasks('./tasks')

  grunt.registerTask('clean', 'Remove the dist directory', () => {
    grunt.file.delete('./dist')
  })

  grunt.registerTask('build:css', ['build:sass', 'postprocess:css'])
  grunt.registerTask('build:html', ['build:pages', 'minify:html'])
  grunt.registerTask('build', ['clean', 'copy:files', 'build:css', 'build:js', 'build:html'])
  grunt.registerTask('serve', ['build', 'serve:dist', 'watch:src'])

  grunt.registerTask('default', ['build'])
}
