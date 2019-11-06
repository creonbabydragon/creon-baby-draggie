/* Components can include other components
     Each component is a class

     To render the HTML for our Footer component, we would have to call it like
     `(new Footer(properties)).render()`

     As a shortcut, this render function builds a custom render function
     An index.js file imports the Footer, runs it through render, and
     exports it as Footer.

     Then the file that renders it can call it as `Footer(properties)`
     as if it were a function
*/

function render(Component) {
  return function (properties) {
    const instance = new Component(properties)
    return instance.render()
  }
}

module.exports = render
