function biggestElement(arr) {
    return Math.max(...arr.flat(1));
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));
