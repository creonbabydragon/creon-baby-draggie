const project = {
  paths: {
    dist: 'dist',
    source: 'src',
    pages: 'src/views/pages',
    server: 'https://creon.babydraggie.com',
  },
  scripts: {
    'dist/assets/js/main.js': 'src/scripts/main.js',
    'dist/assets/js/home.js': 'src/scripts/Home.js',
  },
  stylesheets: {
    'dist/assets/css/main.css': 'src/stylesheets/base.scss',
    'dist/assets/css/home.css': 'src/stylesheets/Home.scss',
  },
  staticContent: {
    'dist/assets': 'src/assets',
  },
}

module.exports = project
