const RotatingBurst = require('../../lib/RotatingBurst')

const RPS = 1 / 30 // rotations per second
const starburst = new RotatingBurst('.background-layer-starburst > svg', RPS)
starburst.start()
