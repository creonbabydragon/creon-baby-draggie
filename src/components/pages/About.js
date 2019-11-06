const { Navigation, Footer } = require('../')

class About {
  constructor() {
    this.fileName = 'about.html'
  }

  render() {
    return `
      <html>
      <head>
        <title>About Page</title>
      </head>
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
