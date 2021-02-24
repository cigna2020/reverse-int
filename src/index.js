module.exports = function reverse(n) {
    const stringReversed = n.toString().split('').reverse().join('')
    const res = parseInt(stringReversed)
    return res
}
