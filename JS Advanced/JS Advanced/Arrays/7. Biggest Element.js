function biggestElement(arr) {
     let arrBiggestElements = arr.map(x => {
        x.sort((a, b) => b - a);
        return x[0];
    }).sort((a, b) => b - a);

    return arrBiggestElements[0];
}
console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));
