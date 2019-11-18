const project = {
  paths: {
    dist: 'dist',
    pages: 'src/views/pages',
    server: 'https://creon.babydraggie.com',
  },
  scripts: {
    'dist/assets/js/global.js': 'src/scripts/main.js',
    'dist/assets/js/home.js': 'src/scripts/Home.js',
  },
  stylesheets: {
    'dist/assets/css/global.css': 'src/stylesheets/base.scss',
    'dist/assets/css/home.css': 'src/stylesheets/Home.scss',
  },
  staticContent: {
    'dist/assets': 'src/assets',
  },
}

module.exports = project
