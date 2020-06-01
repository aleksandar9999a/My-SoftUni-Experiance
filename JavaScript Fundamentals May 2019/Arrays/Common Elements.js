function solve(firstArr, secondArr) {
    return firstArr.reduce((acc, x) => {
        if (secondArr.includes(x)) { acc.push(x); }
        return acc;
    }, []).join('\n')
}
console.log(solve(["S", "o", "f", "t", "U", "n", "i", " "],
["s", "o", "c", "i", "a", "l"]));
