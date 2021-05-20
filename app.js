const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const nuevosItems = _.flattenDeep(items)
console.log(nuevosItems)
