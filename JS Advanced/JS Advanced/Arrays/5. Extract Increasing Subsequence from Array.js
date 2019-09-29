function solve(arr) {
    return arr.reduce((res, num, i, arr) => {
        if (num >= arr[i - 1]) {
            res.push(num);
        }
        return res;
    }, [arr[0]]).join('\n');
}
console.log(
    solve([1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24]
        )
);
