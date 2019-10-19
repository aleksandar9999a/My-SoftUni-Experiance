module.exports = function solve(string, n) {
    return string.padEnd(Math.ceil(string.length / n) * n,  string).match(new RegExp(".".repeat(n), "gim")).join(' ')
}
