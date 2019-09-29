function solve(arr) {
    let isMagic = arr
        .reduce((res, row, i, data) => {
            let rowSum = row.reduce((a,b) => a + b);
            let colSum = data.reduce((res, b) =>res + Number(b[i]), 0);
            res.push(rowSum, colSum);
            return res;
        }, [])
        .every((num, _, data) => num === data[0]);

    return isMagic;
}
console.log(
    solve([[1, 0, 1],
        [0, 0, 1],
        [1, 1, 0]]
       )
);
