function solve(firstArr, secondArr) {
    return firstArr.reduce((acc, x, i) => {
        const number = i % 2 === 0 ? Number(x) + Number(secondArr[i]) : x + secondArr[i];
        acc.push(number);
        return acc;
    }, []).join(' - ');
}

console.log(solve(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]));
