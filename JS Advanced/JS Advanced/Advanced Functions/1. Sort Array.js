function sortArray(numberArr, str) {
    let obj = {
        asc: arr => arr.sort((a, b) => a - b),
        desc: arr => arr.sort((a, b) => b - a)
    }

    return obj[str](numberArr);
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));