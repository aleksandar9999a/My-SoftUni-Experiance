function getDollar(formatter) {
    return function (value) {
        return formatter(`.`, `$`, true, value);
    }
}

module.exports = getDollar;