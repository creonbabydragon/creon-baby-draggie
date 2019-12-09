const project = require('../../../project')

const { host } = project.paths

const Head = ({ content, canonical, title }) => `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="canonical"
      href="${canonical.includes('//') ? canonical : `${host}/${canonical}`}"
    >

    <title>${title ? `${title} | ` : ''}creon.babydraggie.com</title>
    <link rel="stylesheet" href="/assets/css/main.css">
    <script src="/assets/js/main.js" defer></script>
    ${content || ''}
  </head>
`

module.exports = Head
