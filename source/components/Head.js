/* eslint-disable prefer-template */
const project = require('../../../project')

const { host } = project.paths

const Head = properties => {
  const {
    canonical,
    content,
    title,
    stylesheets: _stylesheets,
    scripts: _scripts,
  } = properties

  const stylesheets = ['/assets/css/main.css', ..._stylesheets]
  const scripts = ['/assets/js/main.js', ..._scripts]

  const stylesheetsHTML = stylesheets
    .reduce((HTML, href) => HTML + `<link rel="stylesheet" href="${href}">`, '')

  const scriptsHTML = scripts
    .reduce((HTML, src) => HTML + `<script src="${src}" defer></script>`, '')

  return `
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      rel="canonical"
      href="${canonical.includes('//') ? canonical : `${host}/${canonical}`}"
    >
    <title>${title ? `${title} | ` : ''}creon.babydraggie.com</title>

    ${stylesheetsHTML}
    ${scriptsHTML}
    ${content || ''}
  </head>
`
}

module.exports = Head
