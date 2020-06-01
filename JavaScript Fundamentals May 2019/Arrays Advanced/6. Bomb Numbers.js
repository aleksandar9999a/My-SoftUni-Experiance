function solve(arr, detonateParams) {
    while (arr.includes(detonateParams[0])) {
        let index = arr.indexOf(detonateParams[0]);
        arr = arr.filter((x, i) => i < index - detonateParams[1] || i > index + detonateParams[1]);
    }

    return arr.reduce((acc, x) => acc += x, 0)
}

solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1])
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
solve([1, 4, 4, 2, 8, 9, 1], [9, 3])