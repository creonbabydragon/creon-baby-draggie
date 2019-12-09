const { Navigation, Footer, Head } = require('../components')

class About {
  constructor() {
    this.fileName = 'about/index.html'
  }

  render() {
    return `
    <!DOCTYPE html>
    <html lang="en-US">
    ${Head({
      title: 'About Page',
      canonical: this.fileName,
      stylesheets: [
        'https://fonts.googleapis.com/css?family=Maven+Pro:900|Open+Sans:400,400i,700,  &display=swap',
        '/assets/css/home.css',
      ],
      scripts: ['/assets/js/home.js'],
      content: '',
    })}
    <body>
      ${Navigation()}
      <h1>About Page</h1>
      ${Footer()}
    </body>
    </html>
    `
  }
}

module.exports = About
