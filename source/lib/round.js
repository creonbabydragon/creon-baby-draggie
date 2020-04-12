const round = (value, places = 0) => {
  const number = Number(value)
  const power = Number(places)
  if (!number || !power) return NaN

  return Math.round(value * (10 ** power)) / (10 ** power)
}

module.exports = round
