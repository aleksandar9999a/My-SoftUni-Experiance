function sumEvenNumbers (arr) {
    return arr.map(Number).reduce((acc, x) => x % 2 === 0 ? acc += x : acc, 0);
}
console.log(sumEvenNumbers(['3','5','7','9']));
