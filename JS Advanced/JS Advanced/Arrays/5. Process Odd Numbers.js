function processOddNumbers(arr) {
    const filterOddIndex = (x, i) => {
        if (i % 2 != 0){
            return x * 2
        }
    }
    return arr.map(filterOddIndex).reverse().join(' ');
}
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));