const { Navigation } = require('../components')

class Home {
  constructor() {
    this.fileName = 'index.html'
  }

  render() {
    const { fileName } = this

    return `
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="canonical" href="https://creon.babydraggie.com/${fileName}">
      <title>Creon The Draggie's Website</title>

      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Maven+Pro:900|Open+Sans:400,400i,700,700i&display=swap">
      <link rel="stylesheet" href="/assets/css/global.css">
      <link rel="stylesheet" href="/assets/css/home.css">

      <script src="/assets/js/global.js" defer></script>
      <script src="/assets/js/home.js" defer></script>
    </head>
    <body>
      ${Navigation()}
      <div class="background-layer-starburst">
        <svg fill="#F6F0F4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 432 432">
        <polygon points="250.7, -56.7 181.3, -56.7 216, 216"/>
        <polygon points="109.7, -37.6  49.6,  -2.8 216, 216"/>
        <polygon points=" -2.8,  49.6 -37.6, 109.7 216, 216"/>
        <polygon points="-56.7, 181.3 -56.7, 250.7 216, 216"/>
        <polygon points="-37.6, 322.3  -2.8, 382.4 216, 216"/>
        <polygon points=" 49.6, 434.8 109.7, 469.6 216, 216"/>
        <polygon points="181.3, 488.7 250.7, 488.7 216, 216"/>
        <polygon points="322.3, 469.6 382.4, 434.8 216, 216"/>
        <polygon points="434.8, 382.4 469.6, 322.3 216, 216"/>
        <polygon points="488.7, 250.7 488.7, 181.3 216, 216"/>
        <polygon points="469.6, 109.7 434.8,  49.6 216, 216"/>
        <polygon points="382.4,  -2.8 322.3, -37.6 216, 216"/>
        </svg>
      </div>

      <main class="foreground">
        <h1 class="title">Creon The Draggie</h1>
        <div class="shadow-ellipse">
          <img class="baby_creon" src="/assets/images/baby_creon.png">
        </div>
      </main>
    </body>
    </html>
    `
  }
}

module.exports = Home
