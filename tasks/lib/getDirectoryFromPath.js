// if path is a directory, return path
// if file does not have /, return empty string
// if file has /, return the full path before the last /
//! we make an assumption that no directories can contain a .
function getDirectoryFromPath(path) {
  const isDirectory = !path.includes('.')
  if (isDirectory) return path

  const cleanPath = path.startsWith('/')
    ? path.slice(1)
    : path

  if (!cleanPath.includes('/')) return ''
  return cleanPath.slice(0, cleanPath.lastIndexOf('/'))
}

module.exports = getDirectoryFromPath
