const crypto = require('crypto')
const key1 = crypto.randomBytes(32).toString('hex')
const key2 = crypto.randomBytes(32).toString('hex')
console.table({ key1, key2 })
exports.key1 = key1
exports.key2 = key2
