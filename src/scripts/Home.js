const RotatingBurst = require('../lib/RotatingBurst')

const starburst = new RotatingBurst('.background-layer-starburst > svg', (1 / 30))
starburst.start()
