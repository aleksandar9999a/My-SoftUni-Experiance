function distinctArray(arr) {
    return arr.reduce((acc, x) => { if (!acc.includes(x)) { acc.push(x); } return acc; }, []).join(' ');
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])
