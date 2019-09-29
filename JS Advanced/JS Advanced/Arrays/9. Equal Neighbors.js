function intersectByColumn(a, b) {
    return a.filter((element, index) => b[index] === element).length;
}

function intersectByRows(a) {
    return a.filter((element, index) => element === a[index + 1]).length;
}

function equalNeighbors(arr) {
    let result = 0;

    arr.map((x, i) => 
        i < arr.length - 1 
        ? result += intersectByColumn(x, arr[i + 1]) + intersectByRows(x) 
        : result += intersectByRows(x));

    return result;
}
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));

console.log(equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));
